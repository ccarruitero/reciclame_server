class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.text :name
      t.text :address
      t.text :district
      t.decimal :lat
      t.decimal :lng
      t.integer :category_id

      t.timestamps
    end
  end
end
