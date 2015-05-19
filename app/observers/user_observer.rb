class UserObserver < ActiveRecord::Observer
  def after_create user
    user.generate_token
  end
end
