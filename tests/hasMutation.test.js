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

    test1 = hasMutation([
      "ATGCGA",
      "CAGTCC",
      "TTATGT",
      "AGTAGG",
      "CTCCTA",
      "TCACTG"
    ]);
    
    test2 = hasMutation([
      "ATGCGA",
      "CAGGCC",
      "TTATGT",
      "AGAAGG",
      "CTCCTA",
      "TCACTG"
    ]);
    
    test3 = hasMutation([
      "ATGCGA",
      "CAGCGC",
      "TTCTGT",
      "ATAAGG",
      "CTCCTA",
      "TTACTG"
    ]);
    
    test4 = hasMutation([
      "ATGCGA",
      "CTGCGC",
      "TTCTCA",
      "ATAAGA",
      "CGCCTA",
      "TTACTA"
    ]);
    
    test5 = hasMutation([
      "ATTTTA",
      "CTGCGC",
      "TTCTCC",
      "ATAAGA",
      "CGCCTA",
      "TTACTA"
    ]);
    
    test6 = hasMutation([
      "ATTTTA",
      "CTGCGC",
      "TTCTCC",
      "ATAAGA",
      "CAAAAA",
      "TTACTA"
    ]);

    expect(isNotMutated).to.equal(0);
    expect(isMutated).to.equal(1);

    expect(test1).to.equal(1);
    expect(test2).to.equal(1);
    expect(test3).to.equal(1);
    expect(test4).to.equal(1);
    expect(test5).to.equal(1);
    expect(test6).to.equal(1);
  });
});