const assert = require("chai").assert;
const decimalToBinary = require("../src/app").decimalToBinary;

describe("App", function () {
  it("App returns binary equivalent of a negative integer '-32769'", function () {
    let result = decimalToBinary(-32769);
    assert.equal(result, "11111111111111110111111111111111");
  });
});

describe("App", function () {
  it("App returns binary equivalent of a positive integer '32768'", function () {
    let result = decimalToBinary(32768);
    assert.equal(result, "00000000000000001000000000000000");
  });
});

describe("App", function () {
  it("App returns binary equivalent of biggest positive 32 bit integer", function () {
    let result = decimalToBinary(2147483647);
    assert.equal(result, "01111111111111111111111111111111");
  });
});

describe("App", function () {
  it("App returns binary equivalent of biggest negative 32 bit integer", function () {
    let result = decimalToBinary(-2147483647);
    assert.equal(result, "10000000000000000000000000000001");
  });
});

describe("App", function () {
  it("App returns valid result for input '0'", function () {
    let result = decimalToBinary(0);
    assert.equal(result, "00000000000000000");
  });
});

describe("App", function () {
  it("App returns valid result for input ''", function () {
    let result = decimalToBinary(55);
    assert.equal(result, "0000000000110111");
  });
});
