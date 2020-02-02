function testElseIf(val) {
    // if (val > 10) {
    //     return "Greater than 10";
    // }

    // if (val < 5) {
    //     return "Smaller than 5";
    // }

    // return "Between 5 and 10";

    // solution starts here ---------------------

    if (val > 10) {
        return "Greater than 10";
    }

    else if (val < 5) {
        return "Smaller than 5";
    }

    else {
        return "Between 5 and 10";
    }

    // --------------------- solution ends here
}

// Change this value to test
testElseIf(7);

/**
 * In case of mutliple situations we can use if-else ladder (above case known as if-else ladder)
 * which we can understand using the below example:
 */

function ifElseBlock() {
    if (condition1) {
        // some code
    }

    else {
        if (condition2) {
            // some code
        }

        else {
            // some code
        }
    }
}

// above code is same as:

function ifElseBlock() {
    if (condition1) {
        // some code
    } else if (condition2) {
        // some code
    } else {
        // some code
    }
}

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/introducing-else-if-statements