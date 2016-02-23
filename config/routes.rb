Rails.application.routes.draw do
  get 'home/index'

  root 'static_pages#index'

  get '/test/', to: 'static_pages#test', as: 'test'

  namespace :api do
  	get '/tracks/', to: 'tracks#index', as: 'index'
    get '/tracks/:id', to: 'tracks#me', as: 'me'
    get '/artist_images/:id', to: 'artist_images#show', as: 'show'
    get '/comments/:track_id', to: 'comments#index', as: 'indux'
    post '/comment/', to: 'comments#create', as: 'create'
    post '/img_upload/', to: 'artist_images#upload', as: 'img_upload'
    post '/upload/', to: 'tracks#upload', as: 'upload'
  	post '/upload_complete/', to: 'tracks#upload_complete', as: 'upload_complete'
  end

  resources :users, only: [:new, :create, :show]
  resource :sessions, only: [:create, :new, :show]
  delete '/sessions/', to: 'sessions#destroy', as: 'logout'
end
