Reciclame.MapController = Ember.ObjectController.extend({
  lat: null,
  lng: null,
  init: function(){
    var map =  L.mapbox.map('map','ccarruitero.map-d86ft9dj');
    map.setView([37.9, -77], 5);
    /*if("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position){
        var lat = position.coords.latitude,
            lng = position.coords.longitude;
        map.setView([lat, lng], 15);
        var marker = L.marker([lat, lng]).addTo(map);
      });
    } else {
      map.setView([37.9, -77], 5);
    }*/
  }
  
});
