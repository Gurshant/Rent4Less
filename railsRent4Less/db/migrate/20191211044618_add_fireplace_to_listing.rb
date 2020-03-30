class AddFireplaceToListing < ActiveRecord::Migration[6.0]
  def change
    
    remove_column :listings, :fireplace, :integer
    add_column :listings, :fireplace, :boolean
  end
end
