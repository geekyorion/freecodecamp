function diffArray(arr1, arr2) {
    var newArr = [];
    arr1.forEach(value => {
        if (arr2.indexOf(value) === -1) {
            newArr.push(value);
        }
    });
    arr2.forEach(value => {
        if (arr1.indexOf(value) === -1) {
            newArr.push(value);
        }
    });
    return newArr;
}

const result = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(result);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays
