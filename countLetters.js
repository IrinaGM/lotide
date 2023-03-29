// function that gets the actual and the expected results and returns if they are equal or not.
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*
 * The function recieves a sentence as a string
 * The function returns a count of each of the letters in that sentence.
 */
const countLetters = function (sentence) {
  const lettersCount = {};
  for (let letter of sentence) {
    if (lettersCount[letter]) {
      lettersCount[letter]++;
    } else {
      if (letter != " ") {
        lettersCount[letter] = 1;
      }
    }
  }
  return lettersCount;
};
/*
 * ---- Test scenarios ----
 */

const testOneSentence = "lighthouse in the house";
const testOneActualResult = countLetters(testOneSentence);
const testOneExpectedResult = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

assertEqual(testOneActualResult["h"], testOneExpectedResult["h"]);

const testTwoSentence = "";
const testTwoActualResult = countLetters(testTwoSentence);
const testTwoExpectedResult = {};

assertEqual(Object.keys(testTwoActualResult).length, 0);

const testThreeSentence = "Check String";
const testThreeActualResult = countLetters(testThreeSentence);
const testThreeExpectedResult = {
  C: 1,
  h: 1,
  e: 1,
  c: 1,
  S: 1,
  t: 1,
  r: 1,
  i: 1,
  n: 1,
  g: 1,
};

assertEqual(testThreeActualResult["C"], testThreeExpectedResult["C"]);
assertEqual(testThreeActualResult["c"], testThreeExpectedResult["c"]);
