const tail = require("../tail.js");
const assert = require("chai").assert;

describe("#tail", () => {
  it("returns [6,7] for [5,6,7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });
  it("returns ['Lighthouse','Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
  it("returns 'est' for 'Test'", () => {
    assert.strictEqual(tail("Test"), "est");
  });
  it("returns [] for ['one']", () => {
    assert.deepEqual(tail(["one"]), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("returns undefined for tail()", () => {
    assert.strictEqual(tail(), undefined);
  });
  it("checks that original array has not been affected after tail funtion exectution", () => {
    const testArr = [1, 2, 3, 4];
    tail(testArr);
    assert.strictEqual(testArr.length, 4);
  });
});
