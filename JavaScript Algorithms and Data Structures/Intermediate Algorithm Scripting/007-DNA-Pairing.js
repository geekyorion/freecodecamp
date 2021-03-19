function pairElement(str) {
    const pair = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    };

    return str
        .split("")
        .map(type => [type, pair[type]]);
}

const result = pairElement("GCG");
console.log(result);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing
