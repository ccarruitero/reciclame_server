require 'csv'

CSV.foreach(Rails.root + 'db/seeds/initial_data.csv') do |row|
  Place.create! name: row[0],
                address: row[1],
                district: row[2],
                lat: row[3],
                lng: row[4]
end
