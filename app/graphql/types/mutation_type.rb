Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

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
