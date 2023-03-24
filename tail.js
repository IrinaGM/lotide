const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  if (!arr) {
    return undefined;
  } else if (arr.length > 0) {
    return arr.slice(1);
  } else if (arr.length === 0) {
    return [];
  }
};

assertEqual(JSON.stringify(tail([5, 6, 7])), `[6,7]`);
assertEqual(
  JSON.stringify(tail(["Hello", "Lighthouse", "Labs"])),
  `["Lighthouse","Labs"]`
);
assertEqual(tail("Test"), `est`);
assertEqual(JSON.stringify(tail(["one"])), `[]`);
assertEqual(JSON.stringify(tail([])), `[]`);
assertEqual(tail(), undefined);

//Check that origial array remains has no side affects after tail fucntion
const testArr = [1, 2, 3, 4];
tail(testArr);
assertEqual(testArr.length, 4);
