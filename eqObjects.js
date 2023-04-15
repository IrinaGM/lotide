const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

/*
 * Function that takes in two Objects.
 * Returns true if both objects are equal and false otherwise.
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

/*
 * ---- Test scenarios ----
 */

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const numberObject = { 1: 2, 3: 4 };
const anotherNumberObject = { 3: 4, 1: 2 };
assertEqual(eqObjects(numberObject, anotherNumberObject), true);

const differentNumberObject = { 7: 8, 9: 10 };
assertEqual(eqObjects(numberObject, differentNumberObject), false);

assertEqual(eqObjects({}, {}), true);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
assertEqual(
  eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
  true
);

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(
  eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
  false
);
