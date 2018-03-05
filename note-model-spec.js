function newNoteContainsText() {
    var note = new Note("Hello this is a note");
  describe("new note");
  it("Contains text");
  expect.toBeTrue(note.text);
};

function newNoteContainsCorrectText() {
  var note = new Note("Hello this is a note");
  describe("new note");
  it("Contains correct text");
  expect.toBeEqual("Hello this is a note", note.text)
};

newNoteContainsText();
newNoteContainsCorrectText();
