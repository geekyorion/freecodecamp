function myLocalScope() {
    'use strict'; // you shouldn't need to edit this line

    var myVar;              // solution
    console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
// console.log(myVar);      // solution: remove this line or comment this line to remove reference error

/**
 * "use strict" is a feature of ES5 (ECMAScript5) which is used to execution in fail safe manner
 * For more info visit MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
 * Jhon Resig article: https://johnresig.com/blog/ecmascript-5-strict-mode-json-and-more/
 *
 * We can not access myVar at line 11, because it is defined local to that function
 * so we can not access this outside "myLocalScope()" function.
 * Hence we need to remove or comment line 11 for solution to works.
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions