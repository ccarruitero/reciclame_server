Reciclame.LoginController = Ember.Controller.extend({
  init: function(){
    var that = this;
    console.log('currentUser is: ' + currentUser);

    navigator.id.watch({
      loggedInUser: that.loggedUser,

      onlogin: that.onLogin,

      onlogout: that.onLogout
    });
  },

  loggedUser: null,

  onLogin: function(assertion){
    var that = this;
    $.ajax({
      type: 'POST',
      url: '/login',
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
      data: {assertion: assertion},
      success: function(res, status, xhr) {
        console.log('persona authentication succesful');
        that.loggedUser = res.email;
        console.log(that.loggedUser);
        that.transitionToRoute('places');
      },
      error: function(xhr, status, err) {
        console.log("Login failure: " + err);
        that.transitionToRoute('error')
      }
    });
  },

  onLogout: function() {
    var that = this;
    $.ajax({
      type: 'POST',
      url: '/logout',
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
      success: function(res, status, xhr) {
        console.log('logout from persona succesful');
        that.transitionToRoute('places');
      },
      error: function(xhr, status, err) {
        console.log("Logout failure: " + err);
        that.transitionToRoute('error')
      }
    });
  }
});
