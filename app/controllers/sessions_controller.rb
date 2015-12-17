class SessionsController < ApplicationController
	before_action :logged_in?, only: :destroy

  def new
    render :new
  end

  def create
	  @user = User.find_by_credentials(
	    params[:user][:name],
	    params[:user][:password]
	  )
	  #Switch branches
    if @user
      #initiate a new session
      login!(@user)
      render json:  @user
    else
      #flash incorrect password/username combination
      flash.now[:login_errors] = ["Invalid login"]
      render json: { error: "Login Failed" }
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    redirect_to root_url
  end

end
