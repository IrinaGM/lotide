const assertArraysEqual = require("./assertArraysEqual.js");

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

module.exports = middle;
