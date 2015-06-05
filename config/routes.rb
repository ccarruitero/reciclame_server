Reciclame::Application.routes.draw do
  match '*all', to: 'api#preflight', via: [:options]
  root to: 'root#index'
  get '/auth/:provider/callback', to: 'sessions#create'
  post 'logout', to: 'sessions#destroy'

  namespace :api, defaults: {format: :json} do
    resources :categories
    resources :places
    resources :users
  end
end
