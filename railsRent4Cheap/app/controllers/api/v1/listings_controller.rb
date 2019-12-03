class Api::V1::ListingsController < Api::ApplicationController
  before_action :authenticate_user!, except: [:show, :index]
  before_action :find_listing, only: [:show, :edit, :update, :destroy]
  before_action :authorize!, only: [:edit, :update, :destroy]

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
    if listing.save
      render json: {id: listing.id}
    else
      render json:  {errors: listing.errors},
      status: 422 #Unprocessable entity
    end
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
    params.require(:listing).permit(:street_number, :route, :locality, :administrative_area_level_1, :postal_code, :country, :latitude, :longitude,:bedroom, :bathroom, :sqft, :ac, :fireplace, :deck, :price, :description, :is_active)
  end
  def find_listing
    @listing = Listing.find params[:id]
  end
  
  def authorize!
    render json:  {status: 401},status: 401  unless can?(:crud, @listing)
  end
end
