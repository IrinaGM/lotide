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

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function that returns all the indices (zero-based position) in the string where each character is found.

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      if (sentence[i] != " ") {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

/*
 * ---- Test scenarios ----
 */

const testOneSentence = "Check Checkers";
const testOneActualResult = letterPositions(testOneSentence);
const testOneExpectedResult = {
  C: [0, 6],
  h: [1, 7],
  e: [2, 8, 11],
  c: [3, 9],
  s: [13],
  r: [12],
  k: [4, 10],
};

for (const property in testOneExpectedResult) {
  assertArraysEqual(
    testOneActualResult[property],
    testOneExpectedResult[property]
  );
}

const testTwoSentence = "";
const testTwoActualResult = letterPositions(testTwoSentence);
const testTwoExpectedResult = {};

assertEqual(Object.keys(testTwoActualResult).length, 0);
