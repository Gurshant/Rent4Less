class DropAddressesTable < ActiveRecord::Migration[6.0]
  def change
    drop_table :addresses
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
