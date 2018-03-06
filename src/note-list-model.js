(function(exports) {
  function NoteList() {
    this.list = []
  };

  NoteList.prototype = {
    addNote: function(string) {
      this.list.push(new Note(string));
    },

    getNotes: function() {
      return this.list;
    }
  }



  exports.NoteList = NoteList;
})(this);
