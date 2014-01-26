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
