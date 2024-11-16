class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  helper_method :user_signed_in?, :current_user
end
