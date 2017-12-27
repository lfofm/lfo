Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :toggleFollowUser, Types::Relationship do
    argument :currentUser, !types.String
    argument :id, !types.String
    description "Toggle following a user"
    resolve ->(_obj, args, ctx) {
      current_user = User.find_by(id: args['currentUser'])
      return unless current_user

      user = User.find_by(id: args['id'])
      return unless user

      current_user.following?(user) ? current_user.unfollow(user) : current_user.follow(user)
    }
  end

  field :playTrack, Types::Track do
    argument :id, !types.String
    description "Play a track"
    resolve ->(_obj, args, ctx) {
      track = Track.find(args['id'])
      tp = track.track_plays.create(
        user: ctx[:current_user] ? ctx[:current_user] : nil
      )
      track.reload
      tp
    }
  end

  field :createTrack, Types::Track do
    argument :payload, Types::CreateTrackPayload
    description "Create a track"
    resolve ->(_obj, args, ctx) {
      user = ctx[:current_user]
      return nil unless user
      user.tracks.create(
        name: args[:payload][:name],
        description: args[:payload][:description],
        cover: args[:payload][:cover],
        audio: args[:payload][:audio]
      )
    }
  end
end
