// Setup
function testStrictNotEqual(val) {
    if (val !== 17) {           // solution
        return "Not Equal";
    }
    return "Equal";
}

// Change this value to test
testStrictNotEqual(10);

/**
 * Here we are using "!==" which checks for data types too.
 * so:
 */

console.log(2 != "2");      // false
console.log(2 !== "2");     // true

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-inequality-operator