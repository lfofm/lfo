Types::TrackType = GraphQL::ObjectType.define do
  name "Track"
  field :id, !types.String
  field :name, !types.String
  field :user, !Types::UserType
end
