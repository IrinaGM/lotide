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
 * Create my own version of map.
 * The function takes two arguments: array to map, callback function.
 * The map function will return a new array based on the results of the callback function.
 */

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

/*
 * ---- Test scenarios ----
 */

const words = ["ground", "control", "to", "major", "tom"];

const test1ActualResult = map(words, (word) => word[0]);
const test1ExpectedResult = ["g", "c", "t", "m", "t"];

assertArraysEqual(test1ActualResult, test1ExpectedResult);

const numbers = [1, 2, 3, 4];

const test2ActualResult = map(numbers, (number) => number * 2);
const test2ExpectedResult = [2, 4, 6, 8];

assertArraysEqual(test2ActualResult, test2ExpectedResult);

const test3ActualResult = map(words, (word) => word.toUpperCase());
const test3ExpectedResult = ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"];

assertArraysEqual(test3ActualResult, test3ExpectedResult);

const test4ActualResult = map([], (word) => word.toUpperCase());
const test4ExpectedResult = [];
assertArraysEqual(test4ActualResult, test4ExpectedResult);
