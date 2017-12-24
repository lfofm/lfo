Types::RelationshipType = GraphQL::ObjectType.define do
  name "Relationship"
  field :id, !types.String
  field :follower, !Types::UserType
  field :followed, !Types::UserType
end
