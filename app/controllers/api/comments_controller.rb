class Api::CommentsController < ApplicationController

	def create
		unless current_user
			render json: {"doop": "booh"}, status: 400
		end
		final_params = comment_params
		final_params[:user_id] = current_user.id
		@comment = Comment.new(final_params)
		if @comment.save
			render json: {great: "success"}
		else
			render json: @comment.errors.full_messages, status: 400
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
