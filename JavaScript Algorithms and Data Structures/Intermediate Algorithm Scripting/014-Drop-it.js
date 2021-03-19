function dropElements(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr.slice(i);
        }
    }
    return [];
}

dropElements([1, 2, 3], function (n) { return n < 3; });


// using findIndex
function dropElements(arr, func) {
    const index = arr.findIndex(func);
    return index === -1 ? [] : arr.slice(index);
}

dropElements([1, 2, 3], function (n) { return n < 3; });

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it
