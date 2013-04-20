Reciclame.Router.map(function(){
  this.resource('about');
  this.resource('places', function(){
    this.resource('place', { path: ':place_id' });
  });
});

Reciclame.PlacesRoute = Ember.Route.extend({
  model: function(){
    return Reciclame.Place.find();
  }
});
