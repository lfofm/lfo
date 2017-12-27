Types::QueryType = GraphQL::ObjectType.define do
  name "Query"

  field :track do
    type Types::Track
    argument :id, !types.String
    description "Find a track by ID"
    resolve ->(_obj, args, _ctx) { Track.find_by(id: args['id']) }
  end

  field :tracks do
    type types[Types::Track]
    description "Find all tracks"
    resolve ->(_obj, _args, _ctx) { Track.all }
  end

  field :tracksById do
    type types[Types::Track]
    argument :ids, types[!types.String]
    description "Find all tracks"
    resolve ->(_obj, args, _ctx) { Track.where(id: args['ids']) }
  end

  field :checkRelationship do
    type Types::Relationship
    argument :currentUser, !types.String
    argument :id, !types.String
    description "Check relationship between users"
    resolve ->(_obj, args, _ctx) { Relationship.find_by(follower_id: args['currentUser'], followed_id: args['id']) }
  end

  field :user do
    type Types::User
    argument :id, !types.String
    description "Find a user by ID"
    resolve ->(_obj, args, _ctx) { User.find_by(id: args['id']) }
  end
end
