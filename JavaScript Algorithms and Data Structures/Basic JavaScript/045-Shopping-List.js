var myList = [];

myList.push(["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]);      // solution

/**
 * both "push()" and "unshift()" can take more than 1 value to add the values in the array
 * it works because it is using rest parameter concept
 * arr.push has the prototype as "arr.push(...data: any[])"
 */

function showData(...param) {
    console.log(param);
}

showData(1, 2, 3);      // will print [1, 2, 3]
showData([1, 2, 3]);    // will print [[1, 2, 3]]

/**
 * here "...param" is doing all the magic and it is called rest parameters
 * so "...param" is possible when param is an array so that I can take every parameter
 *
 * Note: 1) Do not use rest parameter in the middle of the others parameter
 *          ex:
 *              function fun(a, b, ...c)    --->> it is correct
 *              function fun(a, ...b, c)    --->> will throw an error because c won't be getting any value
 *              // error will be: "Uncaught SyntaxError: Rest parameter must be last formal parameter"
 *       2) we can restrict the number of parameter using rest parameter
 */

// restriction using rest parameter
function add(...[a, b, c]) {
    console.log(a + b + c);
}

add(1);             // output: NaN (because b and c is not getting any value)
add(1, 2);          // output: NaN (bacuase c is not getting any value)
add(1, 2, 3);       // output: 6
add(1, 2, 3, 4);    // output: 6 (bacause we restrict the function to get 3 parameters only using ...[])

// so here "function fun(...[a, b, c])" is same as "function fun(a, b, c)"

/**
 * Tip:
 *      "var divs = [...document.querySelectorAll('div')]" can be used to create the array
 *      document.querySelectorAll("div") --->> it will return the nodeList on which we can't use every function of an array
 *      use Array.from(document.querySelectorAll("div")) or above method to create array
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/shopping-list