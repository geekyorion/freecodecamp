// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
myArray.push(["dog", 3]);       // solution
// myArray is now [["John", 23], ["cat", 2], ["dog", 3]];

/**
 * "push()" function is used on array to append an data to that array.
 * It will push the data to the last of that array
 *
 * Important thing is when we use push then what does push function return?
 * It returns the new length of that array.
 *
 * ex:
 *      var arr = [41, 52, 23, 14];
 *      var length = arr.push(44);
 *      // here length will be 5 and arr will be [41, 52, 23, 14, 44]
 *
 * Note: If we use push() without any parameter then it will simply returns the size of the array
 *       In this case --->> "arr.push()" is same as "arr.length"
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-push