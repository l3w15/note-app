(function(exports) {
  var expect = {
    toBeTrue: function(testParam, func, testString) {
      console.log(func);
      console.log("  " + testString);
      if(!testParam) {
        throw new Error(`Expected true but got ${testParam}`);
      } else {
        console.log('  Passes test!')
      }
    },

    toEqual: function(equalityTest, testParam, func, testString) {
      console.log(func);
      console.log("  " + testString);
      if(!testParam === equalityTest) {
        throw new Error(`Expected ${testParam} to equal ${equalityTest}`);
      } else {
        console.log('  Does stuff!')
      }
    },
  };
  exports.expect = expect;
})(this);
