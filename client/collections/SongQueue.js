// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function() {
      if (this.length === 1) {
        this.first().play();
      }
    });

    this.on('dequeue', function(song){
      this.remove(song);
      if (this.length) {
        this.first().play();
      } else {
        this.trigger('emptyQueue', null);
      }
    }, this);
  }
});