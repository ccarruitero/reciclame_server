Ember.Handlebars.registerBoundHelper('addmarker', function(value){
  /*var category = exists(value.category + 'Layer');

  function exists(category){
    if (category){
    } else {
      var Layer = map.addLayer();
    }
  }
  var marker = L.marker([{{lat}} ,{{lng}}]).addTo(map);*/
  return value.get('name').toUpperCase();
});
