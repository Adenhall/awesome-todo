Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  namespace :api do
    get 'health_check', to: 'base#health_check'

    get 'tasks/incomplete', to: 'task#list_incomplete'
    post 'tasks/completed', to: 'task#mark_complete'
    post 'tasks/new', to: 'task#create'
    post 'tasks/reorder', to: 'task#reorder'
  end

  # Serve the frontend through the root path
  get '*path', to: 'client#index', constraints: ->(req) { req.format.html? }
end
