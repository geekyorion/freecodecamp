// Setup
var outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line

    var outerWear = "Sweater";          // solution

    // Only change code above this line
    return outerWear;
}

myOutfit();


/**
 * JS allows to declare a variable with the same name as a global variable in a function.
 * In this case local variable take the precedence over the global variable
 * or we can say that for that particular function it will overwrite the value of global variable
 * after the function execution, global variable retrieve its original value
 */

// scenario - 1 -----------------------------------------------------------------------------------
var test = 10;

console.log(test);          // print 10

function testFun() {
    console.log(test);      // print "undefined" due to --->> "variable hoisting" <<---
    var test = 20;
    console.log(test);      // print 20 (overwrite the value of local variable)
}
test();                     // Or we can IIFE syntax see: 046-Write-Reusable-JavaScript-with-Functions.js

console.log(test);          // print 10 (local scope is valid till end of that function)

// scenario - 2 -----------------------------------------------------------------------------------
var test = 10;

console.log(test);          // print 10

(function testFun() {
    console.log(test);      // print 10
    test = 20;
    console.log(test);      // print 20
})();                       // IIFE syntax

console.log(test);          // print 20

// now test is modified to 20 because we didn't declare the variable again
// instead we changed the gloval variable directly

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-vs.-local-scope-in-functions