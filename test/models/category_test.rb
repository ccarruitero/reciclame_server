require 'test_helper'

class CategoryTest < MiniTest::Unit::TestCase

  def setup
    @category = Category.new
    @category.name = 'a name'
  end

  def test_should_not_save_without_name
    @category.name = ''
    assert !@category.save
  end

end
