var myVar = 87;

// Only change code below this line
// myVar = myVar + 1; // for solution to work delete this line

myVar++;  // internally it is same as above

/**
 * there are two types of increment:
 * 1) post increment [i++]
 * 2) pre increment [++i]
 * there is not much difference but when it comes to assign then it can create chaos
 * ex:
 *      scenario - 1:
 *      var a = 10;
 *      var b = ++a;
 *
 *      here a and b contain 11
 *
 *      scenario - 2:
 *      var a = 10;
 *      var b = a++;
 *
 *      here a contains 11 because a is going to increment
 *      but b is equal to 10 because we are using post increment
 *      so it will assign a to b first then will increase the value of a
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/increment-a-number-with-javascript