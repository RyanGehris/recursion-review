// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // I - any data type
  // O - stringified
  // C -
  // E - number, boolean, and null need to be converted to string
  //   - strings add extra set of quotations
  //   - functions and undefined return undefined
  //   - if key is undefined, make it a string
  //   - if key is function, do not include in stringified object
  //   - if object value is function or undefined then do not include

  // strategy

  var stringified = '';

  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return stringified + obj; // test +=
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (typeof obj === 'function' || obj === undefined) {
    return undefined;
  }

  // if obj is an array
    // add opening square bracket to stringified
    // iterate over the array elements
      // for each element


  return stringified;
};
