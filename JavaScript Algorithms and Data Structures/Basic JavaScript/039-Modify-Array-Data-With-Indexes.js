// Example
var ourArray = [18, 64, 99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

// Setup
var myArray = [18, 64, 99];

// Only change code below this line.
myArray[0] = 45;        // solution
// now myArray is [45, 64, 99]


/**
 * In an array we can modify the values stored at particular index
 * by using respective index
 *
 * 1) In above program, we are setting the value as 45 at the 0th index
 * 2) Now consider the following program for index and its problem
 *
 *    var arr = ["abcd", "string", 23];
 *    arr[0] = 45;
 *    // now arr is [45, "string", 23];
 *    // because we are replacing the whole string ("abcd") with number (45)
 *    arr[1][2] = 3;        // will throw an error because now we are trying to modify string stored at 1st index
 *    // arr[1][2] => "string"[2] => error; because string is immutable
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/modify-array-data-with-indexes