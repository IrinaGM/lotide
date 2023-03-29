// function that gets the actual and the expected results and returns if they are equal or not.
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*
 * Function that recieves a collection of items and returns counts for a specific subset of those items.
 * allItems: an array of strings that we need to look through
 * itemsToCount: an object specifying what to count
 * The function returns an object that contains the counts of the input object listed.
 */

const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (let item of allItems) {
    if (itemsToCount[item] === true) {
      if (results[item]) {
        results[item]++;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

/*
 * ---- Test scenarios ----
 */

const firstNamesTest = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const itemsToCountTest = {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
};

const resultTest = countOnly(firstNamesTest, itemsToCountTest);

assertEqual(resultTest["Jason"], 1);
assertEqual(resultTest["Karima"], undefined);
assertEqual(resultTest["Fang"], 2);
assertEqual(resultTest["Agouhanna"], undefined);

