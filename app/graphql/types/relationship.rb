Types::Relationship = GraphQL::ObjectType.define do
  name "Relationship"
  field :id, !types.String
  field :follower, !Types::User
  field :followed, !Types::User
end
