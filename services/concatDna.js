module.exports = function concatDna(dna) {
  let fullStringDna = "";
  for (const row of dna) {
    fullStringDna = fullStringDna.concat(row);
  }

  return fullStringDna;
}