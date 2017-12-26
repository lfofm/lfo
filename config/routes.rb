Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end

  post "/graphql", to: "graphql#execute"

  post '/tracks/generate_signature', to: 'tracks#generate_signature'

  # Catch-all to React, if the route hasn't been matched yet

  get "/*all", to: "pages#index"
  get '/', to: 'pages#index'
end
