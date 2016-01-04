class Api::CommentsController < ApplicationController

	def create
		final_params = comment_params
		final_params[:user_id] = current_user.id
		@comment = Comment.new(final_params)
		if @comment.save
			render json: {great: "success"}
		end

	end

	def index
		@comments = Comment.where("track_id = ?", params[:track_id])
		render 'index.json'
	end


	def comment_params
		# params[:comment] = JSON.parse params[:comment] 
    params.require(:comment).permit(:body, :track_id)
  end

end
