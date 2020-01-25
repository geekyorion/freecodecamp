// Example
var sum = 0;
function addThree() {
    sum = sum + 3;
}

// Only change code below this line

// solution starts here ---------------------

function addFive() {
    sum += 5;
}

// --------------------- solution ends here

// Only change code above this line
addThree();
addFive();

/**
 * "sum" is a global variable so we can perform the operation on this variable
 * but this function is not returning anything so if we "console.log(addFive());"
 * then it will print "undefined" because this is the default return type
 */

console.log(addFive());     // prints "undefined"

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-undefined-value-returned-from-a-function