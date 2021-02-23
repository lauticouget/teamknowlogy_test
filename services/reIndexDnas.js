module.exports = function reIndexDnas(dnasArray){
  let adnsToReIndex = []
  for (let i = -1; i > (dnasArray.length * (-1)); i--) {
    const element = dnasArray[i];
    if (element) adnsToReIndex.push(element)
  }

  dnasArray = dnasArray.concat(adnsToReIndex);

  return dnasArray;
}
