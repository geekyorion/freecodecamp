function steamrollArray(arr, flat = []) {
    arr.forEach(arrItem => {
        if (Array.isArray(arrItem)) {
            steamrollArray(arrItem, flat);
        } else {
            flat.push(arrItem);
        }
    });
    return flat;
}

const result = steamrollArray([1, [2], [3, [[4]]]]);
console.log(result);


// using some function
function steamrollArray(arr) {
    while (arr.some(Array.isArray)) {
        arr = [].concat(...arr);
    }
    return arr;
}

const result = steamrollArray([1, [2], [3, [[4]]]]);
console.log(result);


// using some function and recursion
function steamrollArray(arr) {
    arr = [].concat(...arr);
    return arr.some(Array.isArray) ? steamrollArray(arr) : arr;
}

const result = steamrollArray([1, [2], [3, [[4]]]]);
console.log(result);

/**
 * [1, [2], [3, [[4]]]].toString() will give "1,2,3,4"
 *     -> it may consist [object object] if array item is an object
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller
