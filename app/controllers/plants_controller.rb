class PlantsController < ApplicationController
  before_action :get_plant, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy, :add_plant_care_to_plant]

  def index
    plants = Plant.all
    render json: plants
  end

  def show
    render json: @plant, include: :plant_cares
  end

  def create
    plant = Plant.new(plant_params)
    if plant.save
      render json: plant, status: :created
    else
      render json: plant.errors, status: :unprocessable_entity
    end
  end

  def update
    if @plant.update(plant_params)
      render json: @plant, status: :ok
    else
      render json: plant.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @plant.destroy
    render json: "DELETED"
  end

   # CUSTOM METHOD
   def add_plant_care_to_plant
    plant_care = Plant_care.find_by(name: plant_care_params[:name])
    if !@plant.plant_cares.include? plant_care
      @plant.plant_cares.push(plant_care)
      render json: @plant, include: :cares
    else
      render json: @plant, include: :cares
    end
  end

  private

  def plant_params
    params.require(:plant).permit(:name, :user_id, :watering_input, :sunlight_input, :other_input, :image_url )
  end

  def get_plant
    @plant = Plant.find(params[:id])
  end
end
