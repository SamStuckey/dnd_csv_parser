Rails.application.routes.draw do
  get 'songtag/create'  
  root 'static_pages#root'

  resources :tags
  resources :songs



end
