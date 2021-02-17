module.exports = function hasMutation(array) {
    // Validación bases nitrogenadas VALIDAS!
    // SOLO VALORES  [A, T, C, G];

    let mutationRegx = /([a-zA-Z])\1\1\1/i
    let hasMutations = false;
    let mutations = [];
    let verticals = [];
    let descDiagonals = [];
    let ascDiagonals = [];

    for (let i = 0; i < array.length; i++) {
        const horizontal = array[i];
        if (mutationRegx.test(horizontal)) {
            console.log("horizontal mutation: " + horizontal);
            hasMutations = false;
            mutations.push(horizontal)
            if (mutations.length <= 2) break;
        }



        for (let j = 0; j < horizontal.length; j++) {
            const nitrogenBase = horizontal[j];

            // Create Vertical Secuences
            if (verticals[j]) verticals[j] = verticals[j].concat(nitrogenBase);
            else verticals.push(nitrogenBase);

            // Create descending diagonal Secuences
            // diagonalIndex = parseInt("" + i - j);
            diagonalIndex = i - j;
            if (descDiagonals[diagonalIndex]) descDiagonals[diagonalIndex] = descDiagonals[diagonalIndex].concat(nitrogenBase);
            else descDiagonals[diagonalIndex] = nitrogenBase;

            // Create ascending diagonal Secuences
            diagonalIndex = j + i;
            if (ascDiagonals[diagonalIndex]) ascDiagonals[diagonalIndex] = ascDiagonals[diagonalIndex].concat(nitrogenBase);
            else ascDiagonals[diagonalIndex] = nitrogenBase;
        }
    }

    let diagonals = descDiagonals.concat(ascDiagonals);

    if (mutations.length <= 2) {
        for (const vertical of verticals) {
            if (mutationRegx.test(vertical)) {
                console.log("vertical mutation: " + vertical);
                hasMutations = false;
                mutations.push(vertical)
                if (mutations.length >= 2) break;

            }
        }
    }
    if (mutations.length <= 2) {
        for (const diagonal of diagonals) {
            if (mutationRegx.test(diagonal)) {
                console.log("diagonal mutation: " + diagonal);
                hasMutations = false;
                mutations.push(diagonal)
                if (mutations.length >= 2) break;
            }
        }
    }

    console.log(`hasMutation: ${hasMutations}`, mutations);
    
    hasMutations = mutations.length > 2 ? false : true;
    
    return hasMutations;
}