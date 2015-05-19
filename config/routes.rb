Reciclame::Application.routes.draw do
  root to: 'root#index'
  post 'login', to: 'sessions#create'
  post 'logout', to: 'sessions#destroy'

  namespace :api, defaults: {format: :json} do
    resources :categories
    resources :places
    resources :users
  end
end
