class HomeController < ApplicationController
  def index
    render plain: "Welcome to My Song Journal!"
  end
end
