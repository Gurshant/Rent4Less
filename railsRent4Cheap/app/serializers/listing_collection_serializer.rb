class ListingCollectionSerializer < ActiveModel::Serializer
    attributes( :id, :bedroom, :bathroom, :sqft, :price, :street_number, :route, :locality, :administrative_area_level_1, :postal_code, :country, :latitude, :longitude, :address, :ac, :deck, :fireplace,:pet_friendly, :smoking, :parking, :gym, :laundromat)
end
