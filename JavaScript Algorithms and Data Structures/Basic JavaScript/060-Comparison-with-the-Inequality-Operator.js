// Setup
function testNotEqual(val) {
    if (val != 99) {        // solution
        return "Not Equal";
    }
    return "Equal";
}

// Change this value to test
testNotEqual(10);

/**
 * "!=" stands for not equal to. As discussed in 057-Comparison-with-the-Equality-Operator.js
 * we know that below consoles.
 */

console.log(1 != 1);            // false
console.log(2 != 3);            // true
console.log(2 != "2");          // false
console.log(2 !== "2");         // true
console.log(2 !== 2);           // false

/**
 * It is same as equality operator with type conversion and strict data type checking both.
 * There is only one difference that it returns true when the number is not equal or strictly not equal.
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-inequality-operator