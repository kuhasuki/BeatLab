class StaticPagesController < ApplicationController
  def index
    render :landing
  end

  def test
  	render :test
  end
end
