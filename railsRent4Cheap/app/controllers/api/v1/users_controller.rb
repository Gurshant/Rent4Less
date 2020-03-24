class Api::V1::UsersController < Api::ApplicationController
  before_action :authenticate_user!, except: [:create]

  rescue_from(ActiveRecord:: RecordNotFound, with: :record_not_found)
  rescue_from(ActiveRecord:: RecordInvalid, with: :record_invalid)
 
  def current
    # render json: current_user
    render json: { id: current_user.id, first_name: current_user.first_name }
  end 

  def create
    user = User.new user_params
    user.save!
    render json: { id: user.id  }
  end

  private

  def user_params
    params.require(:user).permit( :first_name, :last_name, :email, :password, :phone, :password_confirmation)
  end

  def record_not_found
    render(
      json: { status: 404, errors: {msg: 'Record Not Found'}},
      status: 404
    )
  end

  def record_invalid(error) 
    invalid_record = error.record 
    errors = invalid_record.errors.map do |field, message|
    {
      type: error.class.to_s, 
      record_type: invalid_record.class.to_s,
      field: field,
      message: "#{field.capitalize} #{message}"
    }
    end
    render(
      json: { status: 422, errors: errors }
    )
  end
end
