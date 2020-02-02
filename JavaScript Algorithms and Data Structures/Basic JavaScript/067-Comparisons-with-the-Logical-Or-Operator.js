function testLogicalOr(val) {
    // Only change code below this line

    // if (val) {
    //     return "Outside";
    // }

    // if (val) {
    //     return "Outside";
    // }

    // solution starts here ---------------------
    // we need to return "Outside" when number is not in range 10 to 20 (inclusive)

    if (val < 10 || val > 20) {
        return "Yes";
    }

    // --------------------- solution ends here

    // Only change code above this line
    return "Inside";
}

// Change this value to test
testLogicalOr(15);

/**
 * Like "&&" (Logical AND) we use "||" (Logical OR) operator to combine one or more conditions.
 * It uses the same concept as digital electronic's logical OR gate.
 * 
 * AND logical truth table:
 *       ------------------------------------
 *       |   value1  |   value2  |   output |
 *       ------------------------------------
 *       |   true    |   true    |   true   |
 *       |   true    |   false   |   true   |
 *       |   false   |   true    |   true   |
 *       |   false   |   false   |   false  |
 *       ------------------------------------
 * 
 * Note: 1) AND returns true when atleast one condition evaluates to true otherwise it will return false
 *       2) If first condition is true then OR will not check the further conditions.
 *       3) OR stops when it found a true condition
 */

/*
if(condition1 || condition2 || condition3 || condition4 || ....) {
    // some code here
}
*/

/**
 * In above commented code:
 *      1) Atleast one condition should be true so that JS executes the if block
 *      2) If condition1 evaluates to false then it will go to condition2 and if condition2 evaluates
 *         to true then JS will not check further conditions i.e. condition3, condition4, ...
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

if (fun1() || fun2()) {
    console.log("finally");
}

// output: fun1
//         fun2

// explanation: fun1() returns false so "||" will call fun2() to check whether it will returns true or not
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
//         finally

// explanation: fun1() returns true so "||" will not check for fun2() and if block is executed
// ----------------------------------------------

// ----------------------------------------------
function fun1() {
    console.log("fun1");
    return false;
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

// explanation: fun1() returns false so || checks for fun2() and this returns true so if block is executed
// ----------------------------------------------

/**
 * We can use both && and || in the condition
 */

if (((condition1 || condition2) && (condition3 && condition4)) || (condition5 || condition6)) {
    console.log("hello");
}

/**
 * Above example will print hello on console when the above condition evaluates to true
 * when:
 *      - either condition1 or condition2 is true
 *      - condition3 and condition4 both should be true
 *      - either condition5 or condition6 is true
 */
// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-or-operator