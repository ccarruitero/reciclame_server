require 'test_helper'

class ReciclePlacesControllerTest < ActionController::TestCase
  setup do
    @recicle_place = recicle_places(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:recicle_places)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create recicle_place" do
    assert_difference('ReciclePlace.count') do
      post :create, recicle_place: { address: @recicle_place.address, lat: @recicle_place.lat, lng: @recicle_place.lng, name: @recicle_place.name }
    end

    assert_redirected_to recicle_place_path(assigns(:recicle_place))
  end

  test "should show recicle_place" do
    get :show, id: @recicle_place
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @recicle_place
    assert_response :success
  end

  test "should update recicle_place" do
    put :update, id: @recicle_place, recicle_place: { address: @recicle_place.address, lat: @recicle_place.lat, lng: @recicle_place.lng, name: @recicle_place.name }
    assert_redirected_to recicle_place_path(assigns(:recicle_place))
  end

  test "should destroy recicle_place" do
    assert_difference('ReciclePlace.count', -1) do
      delete :destroy, id: @recicle_place
    end

    assert_redirected_to recicle_places_path
  end
end
