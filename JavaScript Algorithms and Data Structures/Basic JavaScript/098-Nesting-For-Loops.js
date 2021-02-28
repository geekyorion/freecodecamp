function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }

    // Only change code above this line
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/nesting-for-loops
