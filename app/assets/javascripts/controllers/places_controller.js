Reciclame.PlacesController = Ember.ArrayController.extend({
  selectedPlace: null,

  selectedPlaceChange: function(){
    var selected = this.get('selectedPlace');
    this.transitionToRoute('place', selected);
  }.observes('selectedPlace')
});
