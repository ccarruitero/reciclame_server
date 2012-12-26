class ReciclePlaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :lat, :lng
end
