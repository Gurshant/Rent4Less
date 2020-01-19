class ListingCollectionSerializer < ActiveModel::Serializer
    attributes( :id, :bedroom, :bathroom, :sqft, :price, :street_number, :route, :locality, :administrative_area_level_1, :postal_code, :country, :latitude, :longitude, :address, :ac, :deck, :fireplace,:pet_friendly, :smoking, :parking, :gym, :laundromat, :photo)

    def photo
        # urls=[];
        # object.images.each do |image|
        # if object.images.attached?
        #     urls.push(url_for(image))
        # end
        # # byebug
        # end
        # p object
        return url_for(image)
    end
end
