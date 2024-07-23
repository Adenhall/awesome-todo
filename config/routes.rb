Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Serve the frontend through the root path
  get '*path', to: 'client#index', constraints: ->(req) { req.format.html? }

  namespace :api do
    get 'health_check', to: 'base#health_check'
  end
end
