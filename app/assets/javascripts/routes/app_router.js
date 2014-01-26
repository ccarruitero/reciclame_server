Reciclame.Router.map(function(){
  this.resource('about');
  this.resource('places', function(){
    this.resource('place', { path: ':place_id' });
  });
  this.route('login');
  this.route('logout');
  this.route('settings');
});

Reciclame.Router.reopen({
//  location: 'history'
});
