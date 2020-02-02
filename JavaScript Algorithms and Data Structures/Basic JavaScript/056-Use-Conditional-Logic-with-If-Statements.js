// Example
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

    // Only change code below this line.

    // solution starts here ---------------------

    if (wasThatTrue) {
        return "Yes, that was true";
    }

    return "No, that was false";

    // --------------------- solution ends here

    // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);

/**
 * if statements are used to execute the code on the basis of some condition
 * when the condition is  as true then it will
 * 
 * "trueOrFalse()" function is getting true as an argument so it will execute the if block
 * ans immediately return from there so "trueOrFalse(true)" returns "Yes, that was true";
 * We are using return statement that is why it will not be able to execute this function
 * any further
 * 
 * Tip:     true is equivalent to   --->> any number except 0, Infinity, [], {} (array or object without any element)
 *          false is equivalent to  --->> 0, NaN, undefined, null, etc
 * 
 *          "Infinity"              --->> is a number in JS which represetns 1 / 0
 *                                        so 1/0 is equal to Infinity
 */

if (condidion) {
    // expression
}

/**
 * when condition is evaluated to true then it will go to the if block and execute the block
 * otherwise it ignores the if block and resumes the execution after the block
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-conditional-logic-with-if-statements