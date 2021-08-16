class PlantCaresController < ApplicationController
  before_action :get_plant, only: [:show, :update, :destroy]

  def create
    plantcare = PlantCare.new(plant_params) 
    if plantcare.save
      render json: plantcare, status: :created
    else
      render json: plantcare.errors, status: :unprocessable_entity
    end
  end

  def index
    care = PlantCare.all
    render json: care
  end

  def show
    plant = PlantCare.find(params[:id])
    render json: PlantCare
  end

  def update
    
    if @plantcare.update(plant_params)
      render json: @plantcare, status: :ok
    else
      render json: @plantcare.errors, status: :unprocessable_entity
    end

    
  end

  private

  def plant_params
      params.require(:plant_care).permit(:user_id, :plant_id, :date_edit, :notes, :date_acq)
  end

  def get_plant
    @plantcare = PlantCare.find(params[:id])
  end

end
