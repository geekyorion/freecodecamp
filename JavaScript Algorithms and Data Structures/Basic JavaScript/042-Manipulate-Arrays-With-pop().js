// Example
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
// var removedFromMyArray;
var removedFromOurArray = myArray.pop();        // solution
// here removedFromOutArray contains ["cat", 2] and myArray is now [["Jhon", 23]]

/**
 * "pop()" function is the opposite of "push()" function.
 * It removes the data from last of an array and returns it
 * so the return type of the function is the removed data element.
 * It also decreases the length of the array by 1.
 *
 * Note: 1) pop() returns "undefined" when it is used on an empty array instead of throwing an error
 *       2) "push()" and "pop()" functions are used in "stack" data structure
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-pop