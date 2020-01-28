class ListingSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes( :id, :bedroom, :bathroom, :sqft, :ac, :fireplace, :deck, :price, :description, :is_active, :street_number, :route, :locality, :administrative_area_level_1, :postal_code, :country, :latitude, :longitude,:created_at, :address, :pet_friendly, :smoking, :parking, :gym, :laundromat, :fireplace, :photo)
  belongs_to :user, key: :manager
    
  def photo
    # byebug
    urls=[];
    object.images.each do |image|
      if object.images.attached?
        urls.push(url_for(image))
      end
      # byebug
    end
    return urls
  end
end
