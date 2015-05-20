class Api::PlacesController < APIController

  before_action :set_place, except: [:index, :create]
  skip_before_filter :login_required, only: [:index, :show]
  before_filter :admin_required, only: [:update, :destroy]

  def index
    respond_with Place.all
  end

  def show
    respond_with @place
  end

  def create
    @place = Place.create(params[:place])
    respond_api @place
  end

  def update
    @place.update_attributes(params[:place])
    respond_api @place
  end

  def destroy
    @place.destroy
    respond_api @place
  end

  private

  def set_place
    @place = Place.find params[:id]
  end
end
