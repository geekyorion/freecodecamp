function testElse(val) {
    var result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    }

    // if (val <= 5) {              // comment or delete this line
    else {                          // solution
        result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

// Change this value to test
testElse(4);

/**
 * When the condition is evaluated to false then some alternate code is executed with "else" block
 * Sometimes it saves extra comparison like in above code
 * 
 * Note: In case of "multiple if condition", every condition is executed but in if-else condition
 *       when "if" is executed then else will not be executed.
 */

function complexOperation(someNumber) {
    // consider there are more than 10 vairables but we want to update the variable op as per the condition
    var op;

    if (someNumber % 5 == 0) {
        // if the number is mutliple of 5 then if block
        op = someNumber * 7;
    } else {
        // otherwise this "else" block
        op = someNumber * 8;
    }

    // further operations
}

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/introducing-else-statements