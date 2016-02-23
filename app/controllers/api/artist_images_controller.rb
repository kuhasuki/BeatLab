class Api::ArtistImagesController < ApplicationController

	def upload
		temp_params = image_params
		temp_params[:user_id] = current_user.id
		temp_params[:file] = params[:file]
		@image = ArtistImage.new(temp_params)

    if @image.save
      render json: @image
    else
      render json: @image.errors.full_messages, status: 412
    end
	end

	def show
		@images = ArtistImage.where('user_id = ?', params[:id])
		if @images.empty?
			render json: {"bg" => ""}
		else
			render json: {"bg" => @images.last.cdn}
		end
	end

	private

	def image_params
		params[:artist_image] = JSON.parse params[:artist_image] 
    params.require(:artist_image).permit(:alt, :file)
  end

end
