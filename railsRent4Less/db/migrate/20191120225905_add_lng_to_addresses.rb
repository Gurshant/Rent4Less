class AddLngToAddresses < ActiveRecord::Migration[6.0]
  def change
    add_column :addresses, :lng, :string
  end
end
