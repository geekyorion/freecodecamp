function testLogicalAnd(val) {
    // Only change code below this line

    // if (val) {
    //     if (val) {
    //         return "Yes";
    //     }
    // }

    // solution starts here ---------------------
    // we need to return "Yes" when number is in range 25 to 50 (inclusive)

    if (val >= 25 && val <= 50) {
        return "Yes";
    }

    // --------------------- solution ends here

    // Only change code above this line
    return "No";
}

// Change this value to test
testLogicalAnd(10);

/**
 * When we want to perform more than one comparison then we use && (logical AND) operator.
 * It uses the same concept as digital electronic's logical AND gate.
 * 
 * AND logical truth table:
 *       ------------------------------------
 *       |   value1  |   value2  |   output |
 *       ------------------------------------
 *       |   true    |   true    |   true   |
 *       |   true    |   false   |   false  |
 *       |   false   |   true    |   false  |
 *       |   false   |   false   |   false  |
 *       ------------------------------------
 * 
 * Note: 1) AND returns true when each and every condition evaluates to true otherwise it will return false
 *       2) If first condition is false and then AND will not check the further conditions
 */

/*
if(condition1 && condition2 && condition3 && condition4 && ....) {
    // some code here
}
*/

/**
 * In above commented code:
 *      1) If all conditions are true then only JS will execute the if block
 *      2) If condition1 evaluates to true then it will go to condition2 and if condition2 evaluates
 *         to false then JS will not check further conditions i.e. condition3, condition4, ...
 */

// ----------------------------------------------
function fun1() {
    console.log("fun1");
    return false;
}

function fun2() {
    console.log("fun2");
    return false;
}

if (fun1() && fun2()) {
    console.log("finally");
}

// output: fun1
// explanation: fun1() returns false so "&&" will not call fun2()
// ----------------------------------------------

// ----------------------------------------------
function fun1() {
    console.log("fun1");
    return true;                // <<<-- changed to true
}

function fun2() {
    console.log("fun2");
    return false;
}

if (fun1() && fun2()) {
    console.log("finally");
}

// output: fun1
//         fun2

// explanation: fun1() returns true so "&&" checks for fun2() which returns false so if block will not be executed
// ----------------------------------------------

// ----------------------------------------------
function fun1() {
    console.log("fun1");
    return true;                // <<<-- changed to true
}

function fun2() {
    console.log("fun2");
    return true;               // <<--- changed to true
}

if (fun1() && fun2()) {
    console.log("finally");
}

// output: fun1
//         fun2
//         finally

// explanation: fun1() and fun2() are returning true so if block executed here
// ----------------------------------------------

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-and-operator