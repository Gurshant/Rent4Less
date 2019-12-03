class AddAddressToListing < ActiveRecord::Migration[6.0]
  def change
    add_column :listings, :street_number, :integer
    add_column :listings, :route, :string
    add_column :listings, :locality, :string
    add_column :listings, :administrative_area_level_1, :string
    add_column :listings, :postal_code, :string
    add_column :listings, :country, :string
    add_column :listings, :lat, :string
    add_column :listings, :lng, :string
  end
end
