const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*
 * The function findKey takes in an object and a callback.
 * It returns the first key for which the collback returns a truthy value.
 * If no key is found then it should return undefinded.
 */

const findKey = (object, callback) => {
  return Object.keys(object).find((key) => callback(object[key]));
};

/*
 * ----- Test Scenarios -----
 */

const testData = {
  Megy: { kids: 5 },
  Brian: { kids: 2 },
  Jane: { kids: 2 },
  Emily: { kids: 1 },
};

assertEqual(
  findKey(testData, (value) => value[`kids`] === 2),
  "Brian"
);
assertEqual(
  findKey(testData, (value) => value[`kids`] === 0),
  undefined
);
assertEqual(
  findKey(testData, (value) => value[`kids`] === 1),
  "Emily"
);
assertEqual(findKey({}), undefined);
