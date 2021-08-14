Rails.application.routes.draw do

  resources :plants do
    resources :plant_cares
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
