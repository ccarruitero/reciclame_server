class SessionsController < ApplicationController

  def create
    audience = 'http://' + request.host_with_port
    user = User.authenticate_with_persona(params[:assertion], audience)
    if user['email']
      session[:email] = user['email']
      set_current_user session[:email]
      respond_to do |f|
        f.json { render json: @current_user }
      end
    else
      flash.now.alert = 'Invalid email or something'
      redirect_to root_url
    end
  end

  def destroy
    session[:email] = nil
    redirect_to root_url, notice: 'Logged out!'
  end

  private

  def set_current_user email
    @current_user ||= User.find_or_create_by(email: email)
  end

end
