(function(exports) {
  var expect = {
    toBeTrue: function(testParam) {
      if(!testParam) {
        throw new Error(`Expected true but got ${testParam}`);
      } else {
        console.log("  Passes test!")
      }
    },

    toBeEqual: function(testParam, equalityTest) {
      if(testParam !== equalityTest) {
        throw new Error(`Expected ${testParam.toString()} to equal ${equalityTest}`);
      } else {
        console.log("  Passes test!")
      }
    },
  };

  var describe = function(string) {
    console.log(string)
  };

  var it = function(string) {
    console.log("   " + string)
  };

  exports.expect = expect;
  exports.describe = describe;
  exports.it = it;

})(this);
