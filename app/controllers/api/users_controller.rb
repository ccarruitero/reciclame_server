class Api::UsersController < APIController
  before_action :set_user, except: [:create]
  skip_before_filter :login_required, only: [:create]
  respond_to :json

  def show
    respond_with @user
  end

  def create
    params[:user].delete(:admin)
    user = User.create(params[:user])

    respond_with :api, user
  end

  def update
    params[:user].delete(:admin)
    @user.update_attributes(params[:user])
    respond_with :api, @user
  end

  def destroy
    @user.destroy
    respond_with :api, @user
  end

  private

  def set_user
    @user = User.find(params[:id])
  end
end
