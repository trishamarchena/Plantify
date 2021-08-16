Rails.application.routes.draw do
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/users/verify", to: "users#verify"
  post "/users/login", to: "users#login"
  put "/plants/:id/add_plant_care_to_plant", to: "plants#add_plant_care_to_plant"
  resources :user
  resources :plants
  resources :plant_cares
end
