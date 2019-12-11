Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  namespace :api, defaults:{format: :json} do
    # /api...
    namespace :v1 do 
      # /api/vi...
      resources :listings
      # /api/v1/listings
      resource :session, only: [:create, :destroy]
      resources :users, only: [:create] do
        # api/v1/user/current
        get :current, on: :collection
        # default
        # api/v1/user/:id/current
      end
    end
  end
  resources :users, only: [:new, :create,:show,:edit,:update]
  resource :session, only: [:new, :destroy, :create]
  get('/users/:id/edit_password', {to: 'users#edit_password', as: :edit_password_user})
  patch('/users/:id/update_password', {to: 'users#update_password', as: :update_password_user})
  # resources :addresses, only: [:new, :create,:index]
end
