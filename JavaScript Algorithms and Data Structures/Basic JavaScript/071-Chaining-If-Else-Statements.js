function testSize(num) {
    // Only change code below this line
    // return "Change Me";

    // solution starts here ---------------------

    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }

    // We can write last "else" block in the following way (because else is optional):

    // else if (num >= 20) {
    //     return "Huge";
    // }

    // --------------------- solution ends here
    // Only change code above this line
}

// Change this value to test
testSize(7);

/**
 * We can use n-number of conditions to chain the if-else block to create a if-else ladder
 * Note: "else" block is always optional
 */

// let's use ternary operator to create the same solution: 
// syntax:      condition ? "<when_true>" : "<when_false>";

function testSize(num) {
    return (
        num < 5 ? "Tiny" :
            num < 10 ? "Small" :
                num < 15 ? "Medium" :
                    num < 20 ? "Large" : "Huge"
    );
}


// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/chaining-if-else-statements