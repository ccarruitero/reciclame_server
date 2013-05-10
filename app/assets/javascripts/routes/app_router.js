Reciclame.Router.map(function(){
  this.resource('about');
  this.resource('places', function(){
    this.resource('place', { path: ':place_id' });
  });
});

Reciclame.Router.reopen({
  location: 'history'
});

Reciclame.PlacesRoute = Ember.Route.extend({
  model: function(){
    return Reciclame.Place.find();
  }
});

Reciclame.IndexRoute = Ember.Route.extend({
  redirect: function(){
    this.transitionTo('places');
  }
});
