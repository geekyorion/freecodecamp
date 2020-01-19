// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// <<--- here after shift myArray contains [["dog", 3]] --->>

// Only change code below this line.
myArray.unshift(["Paul", 35]);      // solution
// now myArray contains [["Paul", 35], ["dog", 3]]

/**
 * "unshift()" function is used to add the data at the beginning of the array
 * "push()" method is used to add the element at the last
 *
 * Note: 1) "unshift()", without any data as parameter, returns size of an array
 *          "arr.push()", "arr.unshift()" and "arr.length" are same when no data is given to add to array
 *       2) It returns new length of array after adding the element at the starting of array
 *       3) "unshift()" and "shift()" are used in queue data structure
 *       4) In queue, "unshift()" is called "enqueue()" and "shift()" is called "dequeue()"
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-unshift