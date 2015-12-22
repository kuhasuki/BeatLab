Rails.application.routes.draw do
  get 'home/index'

  root 'static_pages#index'

  get '/test/', to: 'static_pages#test', as: 'test'

  namespace :api do
  	get '/tracks/', to: 'tracks#index', as: 'index'
  	post '/upload/', to: 'tracks#upload', as: 'upload'
  	post '/upload_complete/', to: 'tracks#upload_complete', as: 'upload_complete'
  end

  resources :users, only: [:new, :create, :show]
  resource :sessions, only: [:create, :new, :show]
  delete '/sessions/', to: 'sessions#destroy', as: 'logout'
end
