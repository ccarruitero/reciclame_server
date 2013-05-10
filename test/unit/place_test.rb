require 'test_helper'

class PlaceTest < Minitest::Unit::TestCase

  def setup
    @place = Place.new
    @place.name = 'Some name'
    @place.address = 'Some Street'
    @place.lat = '-10000'
    @place.lng = '10000'
  end

  def test_should_not_save_without_name
    @place.name = ''
    assert !@place.save
  end

  def test_should_not_save_without_address
    @place.address = ''
    assert !@place.save
  end
 
  def test_should_not_save_without_lat
    @place.lat = ''
    assert !@place.save
  end
 
  def test_should_not_save_without_lng
    @place.lng = ''
    assert !@place.save
  end

  def test_lat_and_lng_only_be_integer
    @place.lat = 'some text'
    assert !@place.save

    @place.lng = 'some text'
    assert !@place.save
  end
end
