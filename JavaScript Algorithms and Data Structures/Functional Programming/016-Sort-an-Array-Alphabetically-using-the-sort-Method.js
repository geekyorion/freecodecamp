function alphabeticalOrder(arr) {
    // Only change code below this line

    return arr.sort((a, b) => a === b ? 0 : a < b ? -1 : 1);

    // Only change code above this line
}
const result = alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

console.log(result);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/sort-an-array-alphabetically-using-the-sort-method
