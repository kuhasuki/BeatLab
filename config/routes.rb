Rails.application.routes.draw do
  get 'home/index'

  root 'static_pages#index'

  resources :users, only: [:new, :create]
  resource :sessions, only: [:create, :new, :destroy]
end
