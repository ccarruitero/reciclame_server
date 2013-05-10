Reciclame::Application.routes.draw do
  resources :categories
  resources :places

  root to: 'root#index'
end
