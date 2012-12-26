class ReciclePlacesController < ApplicationController
  # GET /recicle_places
  # GET /recicle_places.json
  def index
    @recicle_places = ReciclePlace.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @recicle_places }
    end
  end

  # GET /recicle_places/1
  # GET /recicle_places/1.json
  def show
    @recicle_place = ReciclePlace.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @recicle_place }
    end
  end

  # GET /recicle_places/new
  # GET /recicle_places/new.json
  def new
    @recicle_place = ReciclePlace.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @recicle_place }
    end
  end

  # GET /recicle_places/1/edit
  def edit
    @recicle_place = ReciclePlace.find(params[:id])
  end

  # POST /recicle_places
  # POST /recicle_places.json
  def create
    @recicle_place = ReciclePlace.new(params[:recicle_place])

    respond_to do |format|
      if @recicle_place.save
        format.html { redirect_to @recicle_place, notice: 'Recicle place was successfully created.' }
        format.json { render json: @recicle_place, status: :created, location: @recicle_place }
      else
        format.html { render action: "new" }
        format.json { render json: @recicle_place.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /recicle_places/1
  # PUT /recicle_places/1.json
  def update
    @recicle_place = ReciclePlace.find(params[:id])

    respond_to do |format|
      if @recicle_place.update_attributes(params[:recicle_place])
        format.html { redirect_to @recicle_place, notice: 'Recicle place was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @recicle_place.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /recicle_places/1
  # DELETE /recicle_places/1.json
  def destroy
    @recicle_place = ReciclePlace.find(params[:id])
    @recicle_place.destroy

    respond_to do |format|
      format.html { redirect_to recicle_places_url }
      format.json { head :no_content }
    end
  end
end
