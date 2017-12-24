Types::UserType = GraphQL::ObjectType.define do
  name "User"
  field :id, !types.String
  field :email, !types.String
  field :username, types.String
  field :description, types.String
  field :tracks, types[Types::TrackType]
  field :verified, !types.Boolean

  field :followers, types[Types::UserType]
  field :follower_count, !types.Int
  field :following, types[Types::UserType]
  field :following_count, !types.Int
end
