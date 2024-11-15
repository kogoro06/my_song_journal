class StaticPagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :top ]
  before_action :set_decorator
  def top; end
end
