Reciclame.ApplicationController = Ember.Controller.extend({
  init: function() {
    // set install web app with fx
    if (window.navigator.mozApps !== undefined) {
      var manifestUrl = 'http://' + window.location.host + '/manifest.webapp';
      console.log(manifestUrl);
      var request = window.navigator.mozApps.install(manifestUrl);
      request.onsuccess = function () {
        var app = this.result;
        console.log('app installed');
      };
      request.onerror = function() {
        console.log('error : ' + this.error.name);
      };
    }
    this._super();
  }

});
