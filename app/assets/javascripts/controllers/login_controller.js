Reciclame.LoginController = Ember.Controller.extend({
  init: function(){
    var currentUser = $USER;
    console.log(currentUser);

    navigator.id.watch({
      loggedInUser: currentUser,
      onlogin: function(assertion) {
        $.ajax({
          type: 'POST',
          url: '/login',
          beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
          data: {assertion: assertion},
          success: function(res, status, xhr) {
            window.location.reload();
            console.log('persona authentication succesful');
          },
          error: function(xhr, status, err) {
            navigator.id.logout();
            console.log("Login failure: " + err);
          }
        });
      },

      onlogout: function() {
        $.ajax({
          type: 'POST',
          url: '/logout',
          beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
          success: function(res, status, xhr) {
            window.location.reload();
            console.log('logout from persona succesful');
          },
          error: function(xhr, status, err) {
            console.log("Logout failure: " + err);
          }
        });
      }
    });
  }
});
