class Api::V1::SessionsController < ApplicationController
  

  def create
    user = User.find_by(email: params[:email].downcase)
    if user && user.authenticate(params[:password])
      cookies.signed[:user_id] = user.id
      
    else
      render json: { error: "Invalid email/password combination"}, 
      status: 401
    end
  end

  def destroy
    cookies.delete :user_id
    # redirect_to root_path
    render json: { message: "You have been signed out" }
  end
end
