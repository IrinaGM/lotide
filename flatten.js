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

//function that takes an array containing elements including nested arrays of elements, and returns a "flattened" version of the array.
const flatten = function (array) {
  const flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flattenedArray.push(array[i][j]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [], 5]), [1, 2, 5]);
assertArraysEqual(flatten([1, 2, ["string"], 5]), [1, 2, "string", 5]);
assertArraysEqual(flatten([[]]), []);
