const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*
 * Function that takes in an object and a value.
 * Scans the Object and retuns the first key which contains the given value.
 * If no key with that given value is found, it should return undefined.
 */

const findKeyByValue = function (object, value) {
  return Object.keys(object).find((key) => object[key] === value);
};

/*
 * ---- Test scenarios ----
 */

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue({}), undefined);
