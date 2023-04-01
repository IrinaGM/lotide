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
 * Instructions:
 * Elements are taken until predicate returns falsey.
 * The function takes two params: array, callback
 * The function returns a slice of the array with elements taken from the beginning.
 * It should keep going until the callback returns a truthy value.
 * To keep things simple, the callback should only be provided one value: The item in the array.
 */

const takeUntil = (array, callback) => {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
  return results;
};

/*
 * ---- Test scenarios ----
 */

const testData1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const actualResultTest1 = takeUntil(testData1, (num) => num > 5);
const expectedResultTest1 = [1, 2, 3, 4, 5];

assertArraysEqual(actualResultTest1, expectedResultTest1);

const testData2 = ["Dog", "Cat", "Fish", "Parrot"];
const actualResultTest2 = takeUntil(testData2, (data) => data === "Fish");
const expectedResultTest2 = ["Dog", "Cat"];

assertArraysEqual(actualResultTest2, expectedResultTest2);

const testData3 = [];
const actualResultTest3 = takeUntil(testData3, (data) => data === "Fish");
const expectedResultTest3 = [];

assertArraysEqual(actualResultTest3, expectedResultTest3);

const actualResultTest4 = takeUntil(testData1, (data) => data === "Fish");
const expectedResultTest4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

assertArraysEqual(actualResultTest4, expectedResultTest4);
