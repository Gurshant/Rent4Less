class AddListingToAddresses < ActiveRecord::Migration[6.0]
  def change
    add_reference :addresses, :listing, null: false, foreign_key: true
  end
end
