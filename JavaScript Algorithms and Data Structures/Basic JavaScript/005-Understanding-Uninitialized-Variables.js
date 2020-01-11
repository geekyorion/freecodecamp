// Initialize these three variables
var a;
var b;
var c;

// solution starts here ---------------------

a = 5;
b = 10;
c = "I am a";

// --------------------- solution ends here

/**
 * var a; <<-- here a will contain 'undefined'
 * if we use a in mathematical operation then it will give NaN (Not a Number)
 * if we use + to concat string with var a then:
 * 1) 'var a has ' + a => it will give 'var a has undefined'
 * 2) a + ' means not defined' => output will be 'undefined means not defined'
 */

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-uninitialized-variables