function noteListInitiatedWithEmptyArray() {
  var notelist = new NoteList
  describe("New note list")
  it("is initiated with an empty array");
  expect.toBeEqual(notelist.list, [])
};

noteListInitiatedWithEmptyArray();