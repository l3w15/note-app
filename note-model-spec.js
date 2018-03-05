function newNoteContainsText() {
  var note = new Note("Hello this is a note");
  expect.toBeTrue(note.text === "Hello this is a note", "newNoteContainsText",
    "it contains text");
};

function newNoteContainsCorrectText() {
  var note = new Note("Hello this is a note");
  expect.toEqual("Hello this is a note", note.text, "newNoteContainsCorrectText",
    "it contains text");
};


newNoteContainsCorrectText();
newNoteContainsText();
