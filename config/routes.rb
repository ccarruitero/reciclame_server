Reciclame::Application.routes.draw do
  resources :categories
  resources :places

  root to: 'root#index'
  post 'login', to: 'sessions#create'
  post 'logout', to: 'sessions#destroy'
end
