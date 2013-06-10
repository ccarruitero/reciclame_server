Reciclame.PlaceController = Ember.ObjectController.extend({
  isEditing: false,

  init: function(){

    var that = this;
    setTimeout(function(){
      var lat = that.get('model.lat');
      var lng = that.get('content.lng');
      map.setView([lat, lng],17);
    },2000);
  },

  doneEditing: function(){
    this.set('isEditing', false);
    this.get('store').commit();
  },

  edit: function(){
    this.set('isEditing', true);
  }

});
