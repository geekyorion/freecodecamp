function testLessOrEqual(val) {
    if (val <= 12) {                        // solution #1
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {                        // solution #2
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

// Change this value to test
testLessOrEqual(10);

/**
 * "<=" is known as "less than or equal to" and as discussed in 057-Comparison-with-the-Equality-Operator.js,
 * we know the below consoles:
 */

console.log(10 <= 9);            // false
console.log(10 <= 10);           // true
console.log(10 <= "8");          // true (it is checking for the values only)
console.log(10 <= 1);            // true

// It checks whether LHS is lesser than or equal to RHS while performing implicitly type coversion

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-less-than-or-equal-to-operator