class AddLatToAddresses < ActiveRecord::Migration[6.0]
  def change
    add_column :addresses, :lat, :string
  end
end
