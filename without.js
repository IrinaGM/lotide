//function that compares two given arrays
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

//Function that recives two arrays as arguments and console.log an appropriate message to the console.
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function that returns a subset of a give array removing the unwanted elements.
const without = function (source, itemsToRemove) {
  const resultArray = source.filter((value) => !itemsToRemove.includes(value));
  return resultArray;
};

// Test that checks if the original array was altered or not by the without function
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([1, 2, 3], [6]), [1, 2, 3]);
assertArraysEqual(without([], [1, 2, 3]), []);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
