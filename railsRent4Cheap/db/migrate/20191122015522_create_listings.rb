class CreateListings < ActiveRecord::Migration[6.0]
  def change
    create_table :listings do |t|
      t.integer :bedroom
      t.integer :bathroom
      t.integer :sqft
      t.boolean :ac
      t.integer :fireplace
      t.boolean :deck
      t.integer :price
      t.text :description
      t.boolean :is_active

      t.timestamps
    end
  end
end
