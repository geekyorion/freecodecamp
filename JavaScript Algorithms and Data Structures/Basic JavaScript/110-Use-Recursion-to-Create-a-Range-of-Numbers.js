function rangeOfNumbers(startNum, endNum) {
    return startNum > endNum ? [] : [startNum++, ...rangeOfNumbers(startNum, endNum)]
};

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers
