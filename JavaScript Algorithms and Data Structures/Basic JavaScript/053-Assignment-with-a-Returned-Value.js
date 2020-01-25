// Example
var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);          // solution

/**
 * If we want to store the return value in a variable then we can call the function
 * and then we can assign the returned value to a variable
 *
 * In above example:
 *      "processed" is storing the return value of processArg() function
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/assignment-with-a-returned-value