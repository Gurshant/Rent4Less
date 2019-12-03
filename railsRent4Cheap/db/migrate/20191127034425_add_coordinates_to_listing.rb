class AddCoordinatesToListing < ActiveRecord::Migration[6.0]
  def change
    add_column :listings, :latitude, :string
    add_column :listings, :longitude, :string

    remove_column :listings, :lat, :decimal
    remove_column :listings, :lng, :decimal

  end
end
