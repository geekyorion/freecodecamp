// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
// var removedFromMyArray;
var removedFromMyArray = myArray.shift();       // solution
// here removedFromMyArray contains ["Jhon", 23] and myArray contains [["dog", 3]]

/**
 * "shift()" function is used when we want to remove the data from beginning of an array
 * "pop()" function removes data from last
 * "shift()" function returns the removed data from index - 0 (array starting)
 * It also decrease the size of the array
 *
 * Note: If we use "shift()" function on an empty array then it returns "undefined"
 *       like "pop()" function, it doesn't throw any error
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-shift