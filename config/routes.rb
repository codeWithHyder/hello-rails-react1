Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'greetings#random_greeting'
  get '/greetings/random_greeting', to: 'greetings#random_greeting'
end
