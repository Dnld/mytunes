// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({



  initialize: function(){

  },

  playFirst: function() {
    console.log(this.first());
    var first = this.first();
    first.play();
  }



});