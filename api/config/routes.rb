Rails.application.routes.draw do
  resources :user_courses
  resources :courses, only: [:index, :show, :create, :update, :destroy, :edit, :new]
  resources :units
  resources :schools
  resources :libraries
  resources :video_conferences, only: [:index, :show, :create, :update, :destroy]
  resources :attendances
  resources :exams
  resources :resources
  resources :chats
  resources :users, only: [:index, :show, :create, :update, :destroy]
  post "/login", to: "sessions#create"

  # Custom route for joining video conferences
  get "/video_conferences/:id/join", to: "video_conferences#join", as: "join_video_conference"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
