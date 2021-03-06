"use-strict"

var notelist = new NoteList;
var note1 = new Note("TEST");
var fred = new Note("FRED");
var note2 = new Note("Note 2");

noteListInitiatedWithEmptyArray();
noteListStoresNotes();
noteListDisplaysNotes();

function noteListInitiatedWithEmptyArray() {
  // var notelist = new NoteList
  describe("New note list")
  it("is initiated with an array");
  expect.toBeTrue(Array.isArray(notelist.list));
  it("and the array is empty");
  expect.toBeEqual(notelist.list.length, 0);
};


function noteListStoresNotes() {
  // var notelist = new NoteList
  describe("addNote")
    it("adds notes to the array");
      notelist.addNote("TEST");
      expect.toBeEqual(notelist.list[0].text, "TEST");
};

function noteListDisplaysNotes() {
  describe("displayNotes");
    it("displays all the notes in the array");
    var notelist2 = new NoteList
      notelist2.list.push(note1);
      notelist2.list.push(note2);
      expect.arraysToBeEqual(notelist2.getNotes(), [note1, note2]);
};
