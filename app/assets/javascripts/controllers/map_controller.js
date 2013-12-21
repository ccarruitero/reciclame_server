Reciclame.MapController = Ember.ObjectController.extend({
  needs: ['places'],

  init: function(){

    var that = this;

    setTimeout(function(){
      window.map =  L.mapbox.map('map','ccarruitero.map-d86ft9dj');
      if('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(that.geoSuccess,
                                                 that.geoError,
                                                 that.geoOptions);

      } else {
        map.setView([-12.132292, -77.021588], 13);
      }

      var places = that.get('controllers.places.content');
      places.map(function(place){
        that.addMarker(place);
      });

      map.on('click', function(e){
        console.log('mela!!');
        console.log(e.latlng);
      });
    }, 2000);
  },

  addMarker: function(place){
    var lat = place.get('lat');
    var lng = place.get('lng');
    var that = this;

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
            title: place.get('name'),
            address: place.get('address')
        }
    }).addTo(map).on('click', function(e) {
        that.transitionToRoute('place', place);
    });
  },
  
  geoSuccess: function(position){
    console.log('try get position');
    var lat = position.coords.latitude,
        lng = position.coords.longitude;
    console.log('position is ' + lat, lng);
    map.setView([lat, lng], 13);
    var marker = L.marker([lat, lng]).addTo(map);
  },

  geoError: function(error){
    console.log('something wrong happens with geolocation');
    console.log('Error ' + error.code + ' : ' + error.message);
    //ToDo: show message with error
    map.setView([-12.132292, -77.021588], 13);
  },

  geoOptions: {
    timeout: 17000
  }
});
