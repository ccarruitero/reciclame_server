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
    return this.store.find('place');
  },
  renderTemplate: function(){
    this.render();
    this.render('places', { outlet: 'sidebar' });
    this.render('map', { outlet: 'map' });
  }
});

Reciclame.IndexRoute = Ember.Route.extend({
  redirect: function(){
    this.transitionTo('places');
  }
});

Reciclame.AboutRoute = Ember.Route.extend({
  renderTemplate: function(){
    this.render({ outlet: 'sidebar' })
  }
});

Reciclame.PlaceRoute = Ember.Route.extend({
});

Reciclame.ApplicationRoute = Ember.Route.extend({
  actions: {
    login: function(){
      navigator.id.request();
    },

    login: function(){
      navigator.id.logout();
    },

    goToPlaces: function(){
      map.setZoom(13);
      this.transitionTo('places');
    }
  }
});
