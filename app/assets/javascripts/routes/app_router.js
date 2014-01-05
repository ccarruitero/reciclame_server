Reciclame.Router.map(function(){
  this.resource('about');
  this.resource('places', function(){
    this.resource('place', { path: ':place_id' });
    this.route('settings');
  });
  this.route('login');
  this.route('logout');
});

Reciclame.Router.reopen({
//  location: 'history'
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

    showLoginBox: function() {
      this.transitionTo('login');
    },

    goToPlaces: function(){
      map.setZoom(13);
      this.transitionTo('places');
    },

    goToPlace: function(){
      console.log('pass by here');
      console.log(this.get('store'));
      this.transitionTo('place', this.get('content'));
    },

    showMenu: function(){
      this.transitionTo('places.settings');
    },

    open: function(){
      console.log('login persona iframe should be showed');
      this.render('modal', { into: 'application', outlet: 'modal' });
    },

    close: function(){
      console.log('login persona iframe should be hided');
      this.render('nothing', { into: 'application', outlet: 'modal' });
    }
  }
});
