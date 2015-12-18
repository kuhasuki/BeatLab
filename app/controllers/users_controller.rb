class UsersController < ApplicationController
	#before_action :logged_in?, only: [:new, :create]

	def show
    @user = User.find(params[:id])
		render :show
	end

	def new
		render :new
	end

	def create
		@user = User.new(user_params)
		if @user.save
			login!(@user)
			# render json: @user
		else
			render json: {error: "Invalid username/ password combination"}
		end
	end

	private

	def user_params
    params.require(:user).permit(:name, :password)
  end

end
