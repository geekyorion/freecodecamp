function uniteUnique(...arr) {
    const numSet = {};
    const result = [];
    arr.forEach(subArr => subArr.forEach(num => {
        if (!numSet[num]) {
            numSet[num] = true;
            result.push(num);
        }
    }));
    return result;

    // using set [we already have all arguments in arr]
    const allElements = [].concat(...arr);
    return [...new Set(allElements)];
    // or 
    return Array.from(new Set(allElements));
}

const result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union
