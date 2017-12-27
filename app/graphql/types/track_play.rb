Types::TrackPlay = GraphQL::ObjectType.define do
  name "TrackPlay"
  field :id, !types.String
  field :track, !Types::Track
  field :user, Types::User
end
