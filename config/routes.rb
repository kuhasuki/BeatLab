Rails.application.routes.draw do
  get 'home/index'

  root 'static_pages#index'

  namespace :api do
  	get '/signature/', to: 'tracks#signature', as: 'signature'
  	post '/upload/', to: 'tracks#upload', as: 'upload'
  end

  resources :users, only: [:new, :create, :show]
  resource :sessions, only: [:create, :new, :show]
  delete '/sessions/', to: 'sessions#destroy', as: 'logout'
end
