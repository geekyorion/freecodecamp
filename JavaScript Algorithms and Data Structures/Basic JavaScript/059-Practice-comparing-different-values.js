// Setup
function compareEquality(a, b) {
    if (a === b) {          // solution, replace == with ===
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");

/**
 * Here we are passing two arguments to the function and then we are performing
 * strict equality operation so that it will return the "Equal" when they are strictly equal
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/practice-comparing-different-values