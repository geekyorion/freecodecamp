// using loop
function sumAll(arr) {
    const isFirstMin = arr[0] < arr[1];
    const [min, max] = isFirstMin ? arr : [arr[0], arr[1]];
    let ans = 0;
    for (let i = min; i <= max; i++) {
        ans += i;
    }
    return ans;
}

const result = sumAll([1, 4]);
console.log(result);


// using maths formula
function sumAll(arr) {
    // formula is ((startRange + endRange) * (numbersInRange)) / 2
    return (arr[0] + arr[1]) * ((Math.abs(arr[0] - arr[1]) + 1)) / 2;

    /**
     * we can also use (n*(n + 1) - m*(m + 1)) / 2
     * where n = upper range and m = lower range - 1
     * and the above formula is derived from that
     * so the formula is going to be --->>
     *      (n*(n + 1) - (m - 1)*(m - 1 + 1)) / 2
     *      ((n^2 + n) - (m - 1)*m) / 2
     *      ((n^2 + n) - (m^2 - m)) / 2
     *      (n^2 - m^2 + n + m) / 2     [a^2 - b^2 is (a + b)*(a - b)]
     *      ((n + m)*(n - m) + (n + m)) / 2
     *      (n + m)[(n - m) + 1] / 2
     *      i.e. (startRange + endRange)*[numbersInRange] / 2
     */
}

const result = sumAll([1, 4]);
console.log(result);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range
