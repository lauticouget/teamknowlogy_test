var expect= require('chai').expect;
var hasMutation = require('../services/hasMutation');

describe("DNA Mutation detector", function () {
  it("detects a mutated dna", function () {
    var isNotMutated = hasMutation(["TCGCGA",
    "AAACCC",
    "AAACCC",
    "AACACA"]);
    var isMutated = hasMutation(["ACGCGA",
    "AAACCC",
    "AAACCC",
    "AACACA"]);

    expect(isNotMutated).to.equal(0);
    expect(isMutated).to.equal(1);
  });
});