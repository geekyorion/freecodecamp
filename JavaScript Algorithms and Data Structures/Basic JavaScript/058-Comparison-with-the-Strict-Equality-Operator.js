// Setup
function testStrict(val) {
    if (val === 7) {        // solution
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
testStrict(10);

/**
 * Here we are using === which is strict equality operator and it checks for
 * value as well as for their data types.
 *
 * so       3 == "3"        --->> true
 *          3 === "3"       --->> false as second "3" is of string type
 *          3 == 3          --->> true
 *          3 === 3         --->> true
 *
 * Tip: we can check the data type using "typeof" operator
 * console.log(typeof 3, typeof "3");       // will print "number, string"
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-equality-operator