let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-all-non-numbers
