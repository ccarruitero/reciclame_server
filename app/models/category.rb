class Category < ActiveRecord::Base
  attr_accessible :name
  has_and_belongs_to_many :places

  validates :name, presence: true
end
