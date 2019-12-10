class AddFeaturesToListing < ActiveRecord::Migration[6.0]
  def change
    add_column :listings, :pet_friendly, :boolean
    add_column :listings, :smoking, :boolean
    add_column :listings, :parking, :boolean
    add_column :listings, :gym, :boolean
    add_column :listings, :laundromat, :boolean
  end
end
