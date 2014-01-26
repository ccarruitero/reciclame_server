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
      this.transitionTo('settings');
    }
  }
});
