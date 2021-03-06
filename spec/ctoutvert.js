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
        throw new Error(`Expected ${testParam} to equal ${equalityTest}`);
      } else {
        console.log("  Passes test!")
      }
    },

    arraysToBeEqual: function(array1, array2) {
      if(!Array.isArray(array1) || !Array.isArray(array2)) {
        throw new Error (`At least one of these is not an Array`)
      }
      if (array1.length !== array2.length) {
        throw new Error (`The arrays have different lengths`)
      }
      for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
          throw new Error (`${array1[i]} does not equal ${array2[i]}`)
        }
      } console.log(" Passes test!")
    }
  };

  var describe = function(string) {
    console.log("------- " + string + " -------")
  };

  var it = function(string) {
    console.log("   " + string)
  };

  exports.expect = expect;
  exports.describe = describe;
  exports.it = it;

})(this);
