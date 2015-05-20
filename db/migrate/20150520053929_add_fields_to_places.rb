class AddFieldsToPlaces < ActiveRecord::Migration
  def change
    add_column :places, :verified, :boolean, default: false
    add_column :places, :access, :string
    add_column :places, :schedule_day_start, :integer
    add_column :places, :schedule_day_end, :integer
    add_column :places, :schedule_hour_start, :time
    add_column :places, :schedule_hour_end, :time
    add_column :places, :contact_phone, :integer
  end
end
