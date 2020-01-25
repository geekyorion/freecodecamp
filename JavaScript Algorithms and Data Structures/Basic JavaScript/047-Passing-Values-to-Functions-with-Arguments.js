// Example
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.

// solution starts here ---------------------

function functionWithArgs(num1, num2) {
    console.log(num1 + num2);
}

functionWithArgs(6, 22);

// --------------------- solution ends here

/**
 * Function can accept parameters by/on which we want to perfrom some operations.
 * Like the above function accepts two parameters or arguments and we are consoling
 * the sum of these two parameters.
 *
 * Parameters   => we define what function accepts
 * Arguments    => what we pass to functions
 *
 * Note:
 *      In the function, we can pass any kind of value even a function itself so
 *      arguments can take any value in the function but we can check the type using
 *      "typeof variable_name" to check and can return appropriate output
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/passing-values-to-functions-with-arguments