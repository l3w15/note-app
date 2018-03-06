
var note1 = new Note("TEST");
var fred = new Note("FRED");
var note2 = new Note("Note 2");
var notelist = new NoteList();
var html = "<ul><li><div>TEST</div></li><li><div>Note 2</div></li></ul>"
var notelistview = new NoteListView(notelist)


noteListViewCreatesHTML()

function noteListViewCreatesHTML() {
  describe('createHTML');
    it('returns a string of HTML');
       notelist.list.push(note1, note2);
       expect.toBeEqual(notelistview.createHTML(), html);
};
