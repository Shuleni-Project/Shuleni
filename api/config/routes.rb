Rails.application.routes.draw do
  resources :units
  resources :schools
  resources :libraries
  resources :video_conferences
  resources :attendances
  resources :exams
  resources :resources
  resources :chats
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
