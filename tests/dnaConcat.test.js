var expect= require('chai').expect;
var concatDna = require('../services/concatDna');

describe("DNA digits concat", function () {
  it("Changes dna Array structure to string", function () {
    var stringDna = concatDna(["TCGCGA",
    "AAACCC",
    "AAACCC",
    "AACACA"]);

    expect(stringDna).to.equal("TCGCGAAAACCCAAACCCAACACA");
  });
});