class Category < ActiveRecord::Base
  attr_accessible :name
  has_many :places

  validates :name, presence: true
end
