// using simple math
function smallestCommons(arr) {
    const [min, max] = arr[0] < arr[1] ? arr : arr.reverse();

    // find the total multiple of these number
    let multiple = 1;
    for (let i = min; i <= max; i++) {
        multiple *= i;
    }

    // find the minimum mutliple of max for which every number in range divide it completely
    for (let i = max; i <= multiple; i += max) {
        let isSolution = true;
        for (let j = min; j <= max; j++) {
            if (i % j) {
                isSolution = false;
                break;
            }
        }
        if (isSolution) {
            return i;
        }
    }
    return multiple;
}


const result = smallestCommons([1, 10]);
console.log(result);


// using gcd and lcm
function smallestCommons(arr) {
    const [min, max] = arr[0] < arr[1] ? arr : arr.reverse();

    const gcd = (num1, num2) => !num2 ? num1 : gcd(num2, num1 % num2);
    const lcm = (num1, num2) => (num1 * num2) / gcd(num1, num2);

    let ans = min;
    for (let i = min + 1; i <= max; i++) {
        ans = lcm(ans, i);
    }

    return ans;
}


const result = smallestCommons([1, 10]);
console.log(result);

/**
 * in GCD, we interchange the position by taking the mod until we receive num2 as 0 so we can say num1 is GCD
 *  (num1, num2)
 *        (num2, num1 % num2)
 *              (num1 % num2, num2 % (num1 % num2))
 *                           (num2 % (num1 % num2), (num1 % num2) % (num2 % (num1 % num2))) ...
 *
 * LCM of num1, num2 => (num1 * num2) / GCD(num1, num2)
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple
