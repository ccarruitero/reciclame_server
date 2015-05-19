class APIController < ApplicationController
  before_filter :login_required

  private

  def login_required
    @api_user = User.authenticate_token(request.authorization)
    head :unauthorized unless @api_user
  end

  def admin_required
    head :unauthorized unless @api_user.admin
  end
end
