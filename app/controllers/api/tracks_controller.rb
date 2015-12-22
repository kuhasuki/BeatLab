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
      render 'show'
    else
      render json: @track.errors.full_messages, status: 412
    end
	end

	def upload_success
		render json: {"WTF": "OMFG"}
	end

	def index
		render json: Track.all
	end

	def show

	end

	private

	def track_params
		params[:track] = JSON.parse params[:track] 
    params.require(:track).permit(:title, :genre, :description, :file)
  end

end
