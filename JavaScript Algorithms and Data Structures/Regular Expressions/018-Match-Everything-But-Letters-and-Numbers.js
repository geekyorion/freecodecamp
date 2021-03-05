let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-everything-but-letters-and-numbers
