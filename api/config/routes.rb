Rails.application.routes.draw do
  # mount Rswag::Ui::Engine => '/api-docs'
  # mount Rswag::Api::Engine => '/api-docs'
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
  resources :messages
  resources :users, only: [:index, :show, :create, :update, :destroy]
  post "/login", to: "sessions#create"

  # Custom route for joining video conferences
  get "/video_conferences/:id/join", to: "video_conferences#join", as: "join_video_conference"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get 'user/attendance', to: "attendances#personal_attendance"

  # Defines the root path route ("/")
  root 'school#index'

  # root "articles#index"
  # root "schools#index"
end
