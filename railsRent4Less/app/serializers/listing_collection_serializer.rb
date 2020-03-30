class ListingCollectionSerializer < ActiveModel::Serializer
    attributes( :id, :bedroom, :bathroom, :sqft, :price, :street_number, :route, :locality, :administrative_area_level_1, :postal_code, :country, :latitude, :longitude, :address, :ac, :deck, :fireplace,:pet_friendly, :smoking, :parking, :gym, :laundromat, :photo)

    def photo
        urls=[];
        p 'hello'
        p object
        # byebug
        if object.images.attached?
            # byebug
            return object.images[0].service_url
            # multiple
            # object.images.each do |image|
            #     urls.push(image.service_url)
            #     # byebug

            # end
            # urls.push(url_for(object.images[0]))
            # return url_for(image)
        else 
            return nil
            # urls.push(url_for(nil))
        end
    end
end
