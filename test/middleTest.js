const middle = require("../middle.js");
const assertArraysEqual = require("../assertArraysEqual.js");

//test to see that middle function does not change the original array
const testArray = [1, 2, 3, 4];
middle(testArray);
assertArraysEqual(testArray, [1, 2, 3, 4]);

// additional tests
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([]), []);
