Types::Track = GraphQL::ObjectType.define do
  name "Track"
  field :id, !types.String
  field :name, !types.String
  field :description, types.String
  field :user, !Types::User
  field :track_plays_count, !types.Int
end
