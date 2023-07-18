class GreetingsController < ApplicationController
  def random_greeting
    greeting = Greeting.order('RANDOM()').select(:message).first
    render json: greeting.message
  end
end
