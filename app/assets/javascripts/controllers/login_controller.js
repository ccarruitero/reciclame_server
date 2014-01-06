Reciclame.LoginController = Ember.Controller.extend({
  init: function(){
    var that = this;
    console.log('currentUser is: ' + currentUser);

    navigator.id.watch({
      loggedInUser: currentUser,

      onlogin: that.onLogin(assertion),

      onlogout: that.onLogout
      }
    });
  },

  onLogin: function(assertion){
    $.ajax({
      type: 'POST',
      url: '/login',
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
      data: {assertion: assertion},
      success: function(res, status, xhr) {
        console.log('persona authentication succesful');
        console.log(res.email);
        that.transitionToRoute('places.index');
      },
      error: function(xhr, status, err) {
        console.log("Login failure: " + err);
        that.transitionToRoute('error')
      }
    });
  },

  onLogin: function() {
    $.ajax({
      type: 'POST',
      url: '/logout',
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
      success: function(res, status, xhr) {
        console.log('logout from persona succesful');
        that.transitionToRoute('places.index');
      },
      error: function(xhr, status, err) {
        console.log("Logout failure: " + err);
        that.transitionToRoute('error')
      }
    });
  }
});
