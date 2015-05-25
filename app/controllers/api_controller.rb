class APIController < ApplicationController
  before_filter :login_required, :set_cors_headers
  respond_to :json

  private

  def login_required
    @api_user = User.authenticate_token(request.authorization)
    head :unauthorized unless @api_user
  end

  def admin_required
    head :unauthorized unless @api_user.admin
  end

  def respond_api resource
    respond_with :api, resource
  end

  def set_cors_headers
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
    headers['Access-Control-Request-Method'] = '*'
    headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  end
end
