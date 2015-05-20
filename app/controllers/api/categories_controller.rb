class Api::CategoriesController < APIController

  before_action :set_category, except: [:index, :create]
  skip_before_filter :login_required, only: [:index, :show]
  before_filter :admin_required, only: [:create, :update, :destroy]

  def index
    respond_with Category.all
  end

  def show
    respond_with @category
  end

  def create
    @category = Category.create(params[:category])
    respond_api @category
  end

  def update
    @category.update_attributes(params[:category])
    respond_api @category
  end

  def destroy
    @category.destroy
    respond_api @category
  end

  private

  def set_category
    @category = Category.find(params[:id])
  end
end
