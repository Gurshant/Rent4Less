class UsersController < ApplicationController
    def new
        @user = User.new
    end

    def create
        @user = User.new user_params
        if @user.save 
            session[:user_id] = @user.id
            redirect_to user_path(@user)
        else
            render :new
        end
    end

    def show
        @user=current_user
    end

    def edit 
        @user=current_user
    end

    def update
        user=current_user
        if user.update params.require(:user).permit(:first_name, :last_name, :email, :phone)
            flash[:notice] = "Profile changes saved successfully"
            redirect_to user_path(user)
        else
            render :edit
        end
    end

    def edit_password
        @user=current_user
    end

    def update_password
        @user=current_user
        if @user&.authenticate(params[:user][:current_password])
            if @user.update(user_params) 
                flash[:notice] = "Profile changes saved successfully"
                redirect_to user_path(@user)
            else
                flash[:notice] = "Passwords did not match"
                render :edit_password
            end
        else
            flash[:notice] = "Wrong current password"
            render :edit_password
        end
    end

    private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :phone,:password,:password_confirmation)
    end
end
