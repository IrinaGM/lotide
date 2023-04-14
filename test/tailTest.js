const tail = require("../tail.js");
const assert = require("chai").assert;
const expect = require("chai").expect;

describe("#tail", () => {
  it("returns [6,7] for [5,6,7]", () => {
    expect(tail([5, 6, 7])).to.eql([6, 7]);
  });
  it("returns ['Lighthouse','Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    expect(tail(["Hello", "Lighthouse", "Labs"])).to.eql([
      "Lighthouse",
      "Labs",
    ]);
  });
  it("returns 'est' for 'Test'", () => {
    assert.strictEqual(tail("Test"), "est");
  });
  it("returns [] for ['one']", () => {
    expect(tail(["one"])).to.eql([]);
  });
  it("returns [] for []", () => {
    expect(tail([])).to.eql([]);
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
