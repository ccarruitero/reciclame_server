class Place < ActiveRecord::Base
  attr_accessible :address, :lat, :lng, :name
  belongs_to :category

  validates :name, :address, :lat, :lng, presence: true
  validates :lat, :lng, numericality: true
end
