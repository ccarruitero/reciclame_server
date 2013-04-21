var App = {

  init: function(){
    var map = L.mapbox.map('map','ccarruitero.map-d86ft9dj');

    if("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position){
        map.setView([position.coords.latitude, position.coords.longitude], 15);
      });
    } else {
      map.setView([37.9, -77], 5);
    }
  }
}

window.onload = function(){
  App.init();
};
