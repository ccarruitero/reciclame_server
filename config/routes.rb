Reciclame::Application.routes.draw do
  resources :places

  root to: 'root#index'
end
