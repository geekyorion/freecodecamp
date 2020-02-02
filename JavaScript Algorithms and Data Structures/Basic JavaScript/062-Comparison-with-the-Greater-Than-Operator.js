function testGreaterThan(val) {
    if (val > 100) {        // solution #1
        return "Over 100";
    }

    if (val > 10) {         // solution #2
        return "Over 10";
    }

    return "10 or Under";
}

// Change this value to test
testGreaterThan(10);

/**
 * ">" is known as "greater than" and as discussed in 057-Comparison-with-the-Equality-Operator.js,
 * we know the below consoles:
 */

console.log(1 > 2);     // false    --->> because 1 is smaller
console.log(2 > 1);     // true     --->> because 2 is greater
console.log(1 > 1);     // false    --->> because 1 is not greater but it is equal to 1

console.log(2 > "1")    // ture     --->> it also uses the type conversion

/**
 * In above example we are using two "if statements" and in a program we can
 * use many "if statements" as per our requirements. Since we are using "return" statement
 * in the function so it will not execute further statements.
 *
 * 1) In above example, if we call with 109 as argument ("testGreaterThan(109)") then
 * the first if statement is true so it will return from there directly without going any further.
 *
 * 2) In above example, if we call with 50 as argument ("testGreaterThan(50)") then
 * the first if statement is false so it will not execute that if statement block and check for
 * 2nd if statement which is true so it will execute that and return from there.
 *
 * 3) In above example, if we call with 9 as argument ("testGreaterThan(9)") then
 * the first and second if statements conditions are evaluted as false so it will not execute both
 * if statement and will go for final return statement and will return "10 or Under".
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-operator