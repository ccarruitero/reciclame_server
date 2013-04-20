class PlacesController < ApplicationController

  respond_to :json

  def index
    respond_with Place.all
  end

  def show
    respond_with Place.find(params[:id])
  end

  def new
    @place = Place.new
  end

  def edit
    @place = Place.find(params[:id])
  end

  def create
    @place = Place.new(params[:place])

      if @place.save
        respond_with render json: @place, status: :created, location: @place 
      else
        respond_with render json: @place.errors, status: :unprocessable_entity
      end
  end

  def update
    @place = Place.find(params[:id])

    if @place.update_attributes(params[:place])
      respond_with head :no_content
    else
      respond_with render json: @place.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @place = Place.find(params[:id])
    @place.destroy

    respond_to do |format|
      format.json { head :no_content }
    end
  end
end
