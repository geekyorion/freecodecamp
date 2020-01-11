var a = 3;
var b = 17;
var c = 12;

/*
// Only modify code below this line

a = a + 12;
b = 9 + b;
c = c + 7;
*/

// solution starts here ---------------------

a += 12;
b += 9;
c += 7;

// --------------------- solution ends here

/**
 * compound assignment operator are of great use when the variable name is too big
 *
 * 1) a = a + b             is same as      a += b
 * 2) a += 12 * 45 / 4      is same as      a = a + (12 * 45 / 4)
 *
 * Note:
 *      a = a / 4 + 6
 *      we can not write above expression using compound assignment
 *      a /= 4 + 6 <<---- this is wrong
 *
 *      a = a / 4 + 6       is same as      a = (a / 4) + 6
 *      but
 *      a /= 4 + 6          is same as      a = a / (4 + 6)
 *      so be aware of it
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-addition