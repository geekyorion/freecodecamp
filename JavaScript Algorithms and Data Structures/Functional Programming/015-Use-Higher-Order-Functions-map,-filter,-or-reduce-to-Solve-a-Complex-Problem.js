const squareList = arr => {
    // Only change code below this line
    return arr
        .filter(num => num >= 0 && parseInt(num) === num)
        .map(num => num ** 2);
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
