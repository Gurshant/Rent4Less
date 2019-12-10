class Api::V1::ListingsController < Api::ApplicationController
  before_action :authenticate_user!, except: [:show, :index]
  before_action :find_listing, only: [:show, :edit, :update, :destroy]
  before_action :authorize!, only: [:edit, :update, :destroy]

  rescue_from(ActiveRecord:: RecordNotFound, with: :record_not_found)
  rescue_from(ActiveRecord:: RecordInvalid, with: :record_invalid)

  def index
    listings = Listing.where(is_active: true)
    render json: listings, each_serializer: ListingCollectionSerializer
  end
  
  def show 
    listing = Listing.find(params[:id])
    render json: listing
  end

  def create
    listing = Listing.new(listing_params)
    listing.user = current_user
    # if listing.save
    #   render json: {id: listing.id}
    # else
    #   byebug
    #   render json:  {errors: listing.errors},
    #   status: 422 #Unprocessable entity
    # end
    listing.save!
    render json: { id: listing.id }
  end

  def edit 
  end

  def update
    if @listing.update listing_params
      render json: { id: @listing.id }
    else
      render json:  {errors: @listing.errors},
      status: 422 #Unprocessable entity
    end
  end

  def destroy
    listing = Listing.find params[:id]
    listing.destroy
    render json: {status: 200}, status: 200
  end
  private
 
    def listing_params
      params.require(:listing).permit(:street_number, :route, :locality, :administrative_area_level_1, :postal_code, :country, :latitude, :longitude,:bedroom, :bathroom, :sqft, :ac, :fireplace, :deck, :price, :description, :is_active, :pet_friendly, :smoking, :parking, :gym, :laundromat)
    end

    def find_listing
      @listing = Listing.find params[:id]
    end
    
    def authorize!
      render json:  {status: 401},status: 401  unless can?(:crud, @listing)
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
        message: message
      }
      end
      render(
        json: { status: 422, errors: errors }
      )
    end
end
