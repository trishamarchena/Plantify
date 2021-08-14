class PlantsController < ApplicationController
  before_action :get_plant, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  def index
    plants = Plant.all
    render json: plants
  end

  def show
    render json: @plant, include: :plant_care
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

  private

  def plant_params
    params.require(:plant).permit(:name, :user_id)
  end

  def plant_params
    params.require(:flavor).permit(:name)
  end

  def get_plant
    @plant = Plant.find(params[:id])
  end
end
