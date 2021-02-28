function sum(arr, n) {
    // Only change code below this line

    if (n === 0) {
        return 0;
    }
    return arr[n - 1] + sum(arr, n - 1);

    // Only change code above this line
}

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion
