class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.text :name
      t.text :address
      t.integer :lat
      t.integer :lng

      t.timestamps
    end
  end
end
