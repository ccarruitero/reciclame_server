Reciclame.PlaceController = Ember.ObjectController.extend({
  isEditing: false,

  doneEditing: function(){
    this.set('isEditing', false);
    this.get('store').commit();
  },

  edit: function(){
    this.set('isEditing', true);
  }

});
