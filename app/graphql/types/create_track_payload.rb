Types::CreateTrackPayload = GraphQL::InputObjectType.define do
  name "CreateTrackPayload"
  argument :name, !types.String
  argument :description, types.String
  argument :cover, types.String
  argument :audio, !types.String
end
