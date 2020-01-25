// Declare your variable here
var myGlobal = 10;         // solution

function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;     // solution
}

// Only change code above this line
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

/**
 * Variable are defined with their respective scope and scope restricts the
 * accessibility of the variable out of its scope
 *
 * In above example myGlobal is a global variable which is defined outside the function
 * so all of the functions which are at the same level of that veriable, can access this
 * global variable. on the other hand, take output variable which is defined in fun2()
 * so we can not use this variable outside the function.
 * 
 * Note:
 *      1) ES6 introudced "const" and "let" keywords for variable declaration
 *      2) We can use "var" keyword also
 *      3) "var" supports variable hoisting whether "const" and "let", they don't support this
 */

// 1) example with "var"
//----------------------
function hoisting() {
    console.log(a);     // will print "undefined"
    var a = 10;
    console.log(a);     // will print "10"
}

/**
 * If we are using "var" keyword to declare the variable then at the time of execution,
 * JS complier will take all of the variable defined using "var" and will put
 * "var variable_name" at the starting of the function
 */

// so above function will look like:
function hoisting() {
    var a;
    console.log(a);
    a = 10;
    console.log(a);
}

// Note: this only happens with var and this process is known as variable hoisting


// 2) Why we should use "const" and "let":
function hoisting() {
    console.log(a);     // error, variable "a" is not defined
    const a = 10;       // "const" and "let" both don't support variable hoisting
    console.log(a);
}

/**
 * const    => "const" doesn't allow to modify the variable value
 *              it also prevents a user or a developer from redeclaration the variable
 * let      => "let" doesn't allow to declare the variable again
 *              it allows a user to modify the value
 * var      => "var" allows to modify the value and redeclaration
 */

function difference() {
    var a = 10;
    // some operation
    var a = 20;     // redeclaration of "a" is allowed because we used "var"

    const b = 30;
    b = 10;         // error, "b" is constant so we can not change it's value
    const b = 10;   // error, "const" also doesn't allow for redeclaration of the variable

    let c = 11;
    c = 70;         // "let" allows to modify the value
    let c = 90;     // error, "let" doesn't allow for redeclaration of the variable
}

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-scope-and-functions