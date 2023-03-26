// function that takes two arrays and returns boolean based on a perfect match
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

/*
 * function that returns an array with only the middle element(s) of the provided array.
 * For arrays with one or two elements there is no middle, function will return an empty array.
 */

const middle = function (array) {
  let middle = [];
  const arrayMiddle = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 === 0) {
    middle = array.slice(arrayMiddle - 1, arrayMiddle + 1);
  } else {
    middle.push(array[arrayMiddle]);
  }
  return middle;
};

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([]), []);
