Types::UserType = GraphQL::ObjectType.define do
  name "User"
  field :id, !types.String
  field :email, !types.String
  field :username, types.String
  field :description, types.String
  field :tracks, types[Types::TrackType]
  field :verified, types.Boolean
end
