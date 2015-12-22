require 'base64'
require 'openssl'
require 'digest/sha1'

class Api::TracksController < ApplicationController

	def upload
		temp_params = track_params
		temp_params[:user_id] = current_user.id
		temp_params[:file] = params[:file]
		@track = Track.new(temp_params)

    if @track.save
      render json: {"yes": "it worked"}
    else
      render json: {"no": "it not worked"}, status: 412
    end
	end

	def index

	end

	def show

	end

	private

	def track_params
		params[:track] = JSON.parse params[:track] 
    params.require(:track).permit(:title, :genre, :description, :file)
  end

end
