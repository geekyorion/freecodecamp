function testGreaterOrEqual(val) {
    if (val >= 20) {            // solution #1
        return "20 or Over";
    }

    if (val >= 10) {            // solution #2
        return "10 or Over";
    }

    return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(10);

/**
 * ">=" is known as "greater than or equal to" and as discussed in 057-Comparison-with-the-Equality-Operator.js,
 * we know the below consoles:
 */

console.log(10 >= 9);           // true
console.log(10 >= 14);          // false
console.log(10 >= "8");         // true(it is checking for the values only)
console.log(10 >= 10);          // true

// It checks whether LHS is greater OR equal to the RHS while performing implicitly type coversion

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-or-equal-to-operator