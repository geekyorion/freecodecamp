// Example
var ourArray = [50, 60, 70];
var ourData = ourArray[0]; // equals 50

// Setup
var myArray = [50, 60, 70];

// Only change code below this line.
var myData = myArray[0];        // solution
// here myData contains first value of myArray i.e. 50

/**
 * An array also follows the zero-based indexing so first element is at 0 index.
 * We can nest the calling too while getting the value
 * ex:
 *      var arr = [28, "GeekyOrion"];
 *      // get 4th character ("k") from string stored in arr
 *      var char = arr[1][3]
 *      // now char stores the "k"
 *      // arr[1][3] => "GeekyOrion"[3] => "k"
 *      // here arr[1] will be "GeekyOrion" so we can replace arr[1] with its value
 *
 *
 * Note:    1) We can not get digit of a number using index becuase it is a number not a string
 *             so if we want to get a digit of a number then there are two ways
 *                  a) using mathematical operations (division and remainder)
 *                  b) by converting the number in string and then we can use index
 *          2) An array is mutable but the values of array holds their respective properties
 *             that means, a string stored in an array will be immutable
 *             [Visit next program for more information]
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/access-array-data-with-indexes