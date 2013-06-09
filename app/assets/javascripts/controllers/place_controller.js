Reciclame.PlaceController = Ember.ObjectController.extend({
  isEditing: false,

  init: function(){
    //var lat = this.model.get('lat');
    //var lng = this.model.get('lng');
    //map.setView([lat, lng],17);
    console.log(this.get('model.lat'));
  },

  doneEditing: function(){
    this.set('isEditing', false);
    this.get('store').commit();
  },

  edit: function(){
    this.set('isEditing', true);
  }

});
