function testLessThan(val) {
    if (val < 25) {                  // solution #1
        return "Under 25";
    }

    if (val < 55) {                  // solution #2
        return "Under 55";
    }

    return "55 or Over";
}

// Change this value to test
testLessThan(10);

/**
 * "<" is known as "less than" and as discussed in 057-Comparison-with-the-Equality-Operator.js,
 * we know the below consoles:
 */

console.log(10 < 9);            // false
console.log(10 < 10);           // false
console.log(10 < "8");          // true (it is checking for the values only)
console.log(10 < 1);            // true

// It checks whether LHS is lesser than RHS while performing implicitly type coversion

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-less-than-operator