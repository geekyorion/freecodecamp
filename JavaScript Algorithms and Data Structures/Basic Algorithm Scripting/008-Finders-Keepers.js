// using map
const findElement = (arr, func) => arr[arr.map(func).indexOf(true)];
findElement([1, 2, 3, 4], num => num % 2 === 0);
/**
 * here arr.map(func) will iterate through all elements and will give new array
 * in which every number of arr is called with func [false, true, false, true]
 */


// single line using in-build function
const findElement = (arr, func) => arr.find(func);
findElement([1, 2, 3, 4], num => num % 2 === 0);


// simple appraoch
function findElement(arr, func) {
    for (let num of arr) {
        if (func(num)) {
            return num;
        }
    }
}
findElement([1, 2, 3, 4], num => num % 2 === 0);


// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers
