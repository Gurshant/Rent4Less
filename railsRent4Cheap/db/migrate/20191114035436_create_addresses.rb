class CreateAddresses < ActiveRecord::Migration[6.0]
  def change
    create_table :addresses do |t|
      t.integer :street_number
      t.string :route
      t.string :locality
      t.string :administrative_area_level_1
      t.string :postal_code
      t.string :country

      t.timestamps
    end
  end
end
