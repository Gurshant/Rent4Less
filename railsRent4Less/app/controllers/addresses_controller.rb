class AddressesController < ApplicationController
    def new
        @address=Address.new
    end

    def create
        # @address = Address.new(country: params[:country])
        @address = Address.new(address_params)
        if @address.save 
            p "SAVED================", @address
            redirect_to(user_path(current_user))
        else
            p "NOT-SAVED================", @address.errors
            render :new 
        end 
    end
    def index 
        @addressLat=[]
        @addressLng=[]

        for i in Address.all
            @addressLat.push(i.lat)
            @addressLng.push(i.lng)
        end
        @addressLat=@addressLat.join(",")
        @addressLng=@addressLng.join(",")
        
    end
    private

    def address_params
        params.require(:address).permit(:street_number, :route, :locality, :administrative_area_level_1, :postal_code, :country, :lat, :lng)
    end
end
