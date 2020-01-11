// Only change code below this line

var remainder;

remainder = 11 % 3;     // solution

/**
 * remainder is calculated using percentage sign
 * it works with negative number too but in different way
 *
 * it takes the sign of numerator not the denominator
 * example:
 *          1) +11 % +3 = +2
 *          2) -11 % +3 = -2
 *          3) -11 % -3 = -2
 *          4) +11 % -3 = +2
 *
 * in simple term we can say
 *          1) -a %  b is same as -(a % b)
 *          2) -a % -b is same as -(a % b)
 *          3)  a % -b is same as  (a % b)
 *
 * We can use this to identify whether number is odd or even
 * by simply calculating num % 2
 * if num % 2 = 1 then it is odd otherwise even
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/finding-a-remainder-in-javascript