/**
 * 1. handle base case to eliminate starting loop
 * 2. increment outer loop with 2 cause after 2, every even number is not a prime number
 * 3. since we have odd numbers in loop so no need to check
 *    whether an even number can divide a odd number cause it can not
 *    so increment the inner loop by 2 and for limit we only need the value
 *    to it's square root cause after that product pair repeats in reverse
 *    ex: 105 ->
 *          (1, 105)           reverse (105, 1)
 *          (3, 35)            reverse (35, 3)
 *          (5, 21)            reverse (21, 5)
 *          (7, 15)      --->> reverse (15, 7)
 * 
 *          so square root of 105 is 10.2469 so making limit as 11
 */

function sumPrimes(num) {
    // base cases
    if (num < 2) return 0;
    if (num === 2) return 2;

    // when num > 2
    let sum = 2;
    for (let i = 3; i <= num; i += 2) {
        let isPrime = true;
        for (let j = 3; j < (Math.floor(i ** (1 / 2)) + 1); j += 2) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            sum += i;
        }
    }
    return sum;
}

const result = sumPrimes(10);
console.log(result);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes
