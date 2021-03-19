function sumFibs(num) {
    let first = 0;
    let second = 1;
    let sum = 0;
    while (second <= num) {
        if (second % 2 === 1) {
            sum += second;
        }
        second = second + first;
        first = second - first;
    }
    return sum;
}

const result = sumFibs(4);
console.log(result);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers
