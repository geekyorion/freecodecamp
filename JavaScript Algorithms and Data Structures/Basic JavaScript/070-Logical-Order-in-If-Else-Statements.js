function orderMyLogic(val) {
    // if (val < 10) {
    //     return "Less than 10";
    // } else if (val < 5) {
    //     return "Less than 5";
    // } else {
    //     return "Greater than or equal to 10";
    // }

    // solution starts here ---------------------

    if (val < 5) {                          // change the first condition which checks for less than 5 now
        return "Less than 5";               // appropriate return message
    } else if (val < 10) {                  // change the second condition which checks for less than 10 now
        return "Less than 10";              // appropriate return message
    } else {
        return "Greater than or equal to 10";
    }

    // --------------------- solution ends here
}

// Change this value to test
orderMyLogic(7);

/**
 * Order of the statement written in the if-else ladder is very important.
 * Like in above code (Before the solution), if we call "orderMyLogic(3);" then it should return "Less than 5";
 * But it returns "Less than 10" because of the first condition which is written on top and it will cover
 * two conditions in it which is "less than 10" and "less than 5".
 *
 * Solution: so the order matters in the code hence we wrote first condition which is checking for "less than 5"
 *           first and then it is checking for "less than 10". which is the correct order.
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/logical-order-in-if-else-statements