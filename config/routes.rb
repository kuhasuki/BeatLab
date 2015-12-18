Rails.application.routes.draw do
  get 'home/index'

  root 'static_pages#index'

  resources :users, only: [:new, :create, :show]
  resource :sessions, only: [:create, :new, :show]
  delete '/sessions/', to: 'sessions#destroy', as: 'logout'
end
