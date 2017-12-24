Types::UserType = GraphQL::ObjectType.define do
  name "User"
  field :id, !types.String
  field :email, !types.String
  field :username, types.String
  field :tracks, types[Types::TrackType]
end
