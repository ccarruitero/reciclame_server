Reciclame.PlaceView = Ember.View.extend({
  templateName: 'place',
  showPlace: function(){
    var lat = this.get('controller.model.lat');
    var lng = this.get('controller.content.lng');
    window.map.setView([lat, lng],17);
  }.observes('controller.model')
});
