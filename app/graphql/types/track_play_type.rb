Types::TrackPlayType = GraphQL::ObjectType.define do
  name "TrackPlay"
  field :id, !types.String
  field :track, !Types::TrackType
  field :user, Types::UserType
end
