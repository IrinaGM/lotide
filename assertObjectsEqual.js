/*
 * function that takes two arrays and returns boolean based on a perfect match
 */
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

/*
 * Function that takes in two Objects.
 * Returns true if both objects have identical keys with identical values.
 * Otherwise returns false.
 */

const eqObjects = function (obj1, obj2) {
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (const key in obj1) {
      // check if object - TODO

      // If array compare arrays
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        let returnedAnswer = eqArrays(obj1[key], obj2[key]);
        if (returnedAnswer === false) {
          return false;
        }
      } else {
        // compare primitive values
        if (obj1[key] !== obj2[key]) {
          return false;
        }
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    return console.log(
      `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    return console.log(
      `🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

/*
 * ---- Test scenarios ----
 */

assertObjectsEqual({ 1: "test" }, { 1: "test" });
assertObjectsEqual({ 1: 0 }, { 2: 0 });
assertObjectsEqual({}, {});
assertObjectsEqual({ 1: ["Test", 2] }, { 1: ["Test", 2] });
assertObjectsEqual({ 1: { Test: "a" } }, { 1: { Test: "a" } });
