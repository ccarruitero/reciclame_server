Reciclame.SettingsRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('settings', { outlet: 'modal' })
  }
});
