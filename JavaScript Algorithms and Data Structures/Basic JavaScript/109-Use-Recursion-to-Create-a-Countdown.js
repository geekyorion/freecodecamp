// Only change code below this line
function countdown(n) {
    if (n < 1) {
        return [];
    }
    var arr = countdown(n - 1);
    arr.unshift(n);
    return arr
}

// Only change code above this line

/**
 * we can use splice ->
 *      var arr = countdown(n - 1);
 *      arr.splice(0, 0, n);
 *      // at 0th position, don't remove any item and add n there
 *
 * we can also use ES6 destructuring concept for one liner
 *      return n < 1 ? [] : [n, ...countdown(n - 1)];
 *      // [10, ...[9, ...[8, ...[7, ...[6, ...[5, ...[4, ...[3, ...[2, ...[1, ...[]]]]]]]]]]]
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-countdown
