// Example
function ourReusableFunction() {
    console.log("Heyya, World");
}

ourReusableFunction();

// Only change code below this line

// solution starts here ---------------------

function reusableFunction() {
    console.log("Hi World");
};

reusableFunction();

// --------------------- solution ends here

/* This is IIFE which is "Immediately Invoked Function Expression"

(function reusableFunction() {
    console.log("Hi World");
})();

*/

/**
 * 1) Let us consider a scenario in which we want to write a code and some part of the code
 *    is repeating more than once. In real life project, a dev writes thousands line of code
 *    and in those code modularity is required i.e. whichever code is repeating more than once
 *    we can create a separated function block for that block.
 * 2) We can define the separate function for its own specific operations like "push()" on an array
 *
 * --->> So to use a part code again, we write functions. It increase the resuability of the code.
 *
 * 3) We define the code using function keyword
 * 4) We call the function using its name and parentheses;
 * 5) IIFE is used when you want to call the function after its defination immediately
 */

/*

function function_name(<parameters>) {      // function signature               <-----
    // function defination                                                           | function scope
    return <if_any>                         // return of the function                |
}                                                                               <-----

function_name(<parameters>);                // function calling

*/

/**
 * 1) function singature    --->> Where function name and the what the function is going to take
 *                                as an arguments or params are defined
 * 2) function defination   --->> Block where we define the functionality of the a function
 * 3) function return type  --->> After certain operations, a function returns its output for which is written
 *                                (default is undefined)
 * 4) function scope        --->> Function defination is valid in its scope only
 * 5) functoin calling      --->> Function is defined to use so call it and use its functionality
 *
 * Note: Curly braces "{}"  --->> These define the scope for variables / constant / arrays / objects / ... etc
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions