function nextInLine(arr, item) {
    // Your code here

    // solution starts here ---------------------

    arr.push(item);     // add the element to the last
    var item = arr.shift();        // remove the element from the start

    // --------------------- solution ends here

    return item;  // Change this line
}

// Test Setup
var testArr = [1, 2, 3, 4, 5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

/**
 * We used "push()" and "shift()" functions to solve this problem
 * Please see: "041-Manipulate-Arrays-With-push().js" and "043-Manipulate-Arrays-With-shift().js"
 *
 * 1) Here we are using "JSON.strigify()" which is used to convert an object / variable / JSON / etc...
 * to the corresponding JSON string format
 * 2) "JSON.parse(<stringified value>)" is used to convert the stringified value to
 * corresponding JSON data type format
 *
 * ex:
 *      1) JSON.parse(JSON.stringify(9)) => JSON.parse("9") => 9
 *      2) JSON.parse(JSON.stringify([1, 2, 3, 4, 5])) => JSON.parse("[1, 2, 3, 4, 5]") => [1, 2, 3, 4, 5]
 *         here JSON.stringify([1, 2, 3, 4, 5]) returns "[1, 2, 3, 4, 5]"
 *      3) JSON.parse(JSON.stringify({a: 1})) => JSON.parse("{'a': '1'}") => {"a": 1}
 *
 * Note: JSON.parse() and JSON.stringify() functions are mainly used when the data is exchanged
 *       in the JSON format with the server.
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line