class ListingSerializer < ActiveModel::Serializer
  attributes( :id, :bedroom, :bathroom, :sqft, :ac, :fireplace, :deck, :price, :description, :is_active, :street_number, :route, :locality, :administrative_area_level_1, :postal_code, :country, :latitude, :longitude,:created_at, :address, :pet_friendly, :smoking, :parking, :gym, :laundromat)
  belongs_to :user, key: :manager

end
