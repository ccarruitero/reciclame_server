Reciclame.MapController = Ember.ObjectController.extend({
  needs: ['places'],

  init: function(){

    var that = this;

    setTimeout(function(){
      window.map =  L.mapbox.map('map','ccarruitero.map-d86ft9dj');
      if("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position){
          var lat = position.coords.latitude,
              lng = position.coords.longitude;
          map.setView([lat, lng], 13);
          var marker = L.marker([lat, lng]).addTo(map);
        });
      } else {
        map.setView([37.9, -77], 13);
      }

      $.getJSON('http://localhost:3000/places.json', function(data){
        var places = data.places;

        places.map(function(place){
          that.addMarker(place);
        });
      });
    }, 2000);
  },

  addMarker: function(place){
    var lat = place.lat;
    var lng = place.lng;

    L.mapbox.markerLayer({
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [lng, lat]
        },
        properties: {
            'marker-color': '#000',
            'marker-symbol': 'waste-basket',
            'marker-size': 'medium',
            title: place.name,
            address: place.address
        }
    }).addTo(map);
  }
  
});
