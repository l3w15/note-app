function noteListInitiatedWithEmptyArray() {
  var notelist = new NoteList
  describe("New note list")
  it("is initiated with an array");
  expect.toBeTrue(Array.isArray(notelist.list));
  it("and the array is empty");
  expect.toBeEqual(notelist.list.length, 0);
};

noteListInitiatedWithEmptyArray();
