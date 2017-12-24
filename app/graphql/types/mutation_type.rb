Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :toggleFollowUser, Types::RelationshipType do
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

  field :playTrack, Types::TrackPlayType do
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
end
