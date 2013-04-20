class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :lat, :lng
end
