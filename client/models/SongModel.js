// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  ended: function(player) {
    console.log('ended');
    this.dequeue();
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    console.log('dequeue');
    this.trigger('dequeue', this);
  }


});
