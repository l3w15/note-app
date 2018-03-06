function noteListInitiatedWithEmptyArray() {
  var notelist = new NoteList
  describe("New note list")
  it("is initiated with an array");
  expect.toBeTrue(Array.isArray(notelist.list));
  it("and the array is empty");
  expect.toBeEqual(notelist.list.length, 0);
};

noteListInitiatedWithEmptyArray();

function noteListStoresNotes() {
  var notelist = new NoteList
  describe("addNote")
    it("adds notes to the array");
      note = new Note("TEST")
      notelist.addNote(note)
      console.log(notelist.list[0])
      console.log(note)
      expect.toBeEqual(notelist.list[0], note)
};

noteListStoresNotes();
