(function(exports) {
  function NoteList(noteClass = Note) {
    this.noteClass = noteClass
    this.list = []
  };

  NoteList.prototype = {
    addNote: function(string) {
      this.list.push(new this.noteClass(string));
    },

    getNotes: function() {
      return this.list;
    }
  }



  exports.NoteList = NoteList;
})(this);
