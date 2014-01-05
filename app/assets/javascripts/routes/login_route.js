Reciclame.LoginRoute = Ember.Route.extend({
  renderTemplate: function(){
    this.render('loginBox', { outlet: 'modal' })
  },

  actions: {

    loginPersona: function(){
      navigator.id.request();
    },

    logoutPersona: function(){
      navigator.id.logout();
    }
  }
});
