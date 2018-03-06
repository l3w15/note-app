(function(exports) {
  function NoteListView(notelist) {
    this.notelist = notelist;
  }

  NoteListView.prototype = {
    createHTML: function() {
      var string = "<ul>"
      var notes = this.notelist.getNotes()
      for (var i = 0; i < notes.length; i++) {
        string += `<li><div>${notes[i].showText()}</div></li>`
      }
      string += "</ul>"
      return string;
    }
  }
  exports.NoteListView = NoteListView;
})(this);
