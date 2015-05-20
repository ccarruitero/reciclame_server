class Place < ActiveRecord::Base
  attr_accessible :address, :lat, :lng, :name, :district, :category_id,
                  :verified, :access, :schedule_day_start, :schedule_day_end,
                  :schedule_hour_start, :schedule_hour_end, :contact_phone,
                  :country
  has_and_belongs_to_many :categories

  validates :name, :address, :lat, :lng, presence: true
  validates :lat, :lng, numericality: true
end
