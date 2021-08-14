class PlantCaresController < ApplicationController

  def index
    care = PlantCare.all
    render json: care
  end
  
  

end
