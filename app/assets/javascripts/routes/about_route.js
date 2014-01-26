Reciclame.AboutRoute = Ember.Route.extend({
  renderTemplate: function(){
    this.render({ outlet: 'sidebar' })
  }
});
