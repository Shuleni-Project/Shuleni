Rails.application.routes.draw do
  resources :messages
  resources :units
  resources :schools
  resources :libraries
  resources :video_conferences
  resources :attendances
  resources :exams
  resources :resources
  resources :chats
  resources :users, only:[:show, :create, :destroy, :index]
  
  post '/login', to: 'sessions#create'
  delete "/logout", to: "sessions#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get 'user/attendance', to: "attendances#personal_attendance"

  # Defines the root path route ("/")
  root 'school#index'

  # root "articles#index"
  # root "schools#index"
end
