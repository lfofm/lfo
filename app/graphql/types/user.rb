Types::User = GraphQL::ObjectType.define do
  name "User"
  field :id, !types.String
  field :email, !types.String
  field :username, types.String
  field :description, types.String
  field :tracks, types[Types::Track]
  field :verified, !types.Boolean

  field :followers, types[Types::User]
  field :follower_count, !types.Int
  field :following, types[Types::User]
  field :following_count, !types.Int
end
