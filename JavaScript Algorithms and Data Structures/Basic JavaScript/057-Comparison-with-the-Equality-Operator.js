// Setup
function testEqual(val) {
    if (val == 12) {        // solution
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
testEqual(10);

/**
 * Here we are using same thing but instead of passing a boolean value, now we are passing
 * a number and using equality operator we are checking whether, parameter "val" (which will
 * get the value at the time of function calling) is equal to 12 or not
 * 
 * so here we are passing 10, in if condition is evaluated as false becuase we are checking
 * whether val (which is 10) is equal to 12 or not. So it ignores the if block and returns "Not Equal".
 * 
 * Operators: we use operators to perform some operations on operand(s) to produce some result
 *      1) +, -, *, / , %, ++, --       --->> these are arithmatic operators
 *      2) ==       --->> it will check for two operand's 'value' whether they are equal or not
 *      3) ===      --->> it will check operands with data type for equality
 *      4) >=       --->> greater than or equal to
 *      5) <=       --->> less than or equal to
 *      6) <, >     --->> less than, greater than
 *      7) !=       --->> not equal to
 *      8) !==      --->> strictly not equal to
 * Note: 
 *      1) unary operators require one operand to perform the tast like (++ and --)
 *      2) binary operators require two operands like (>, ==, <=, etc)
 *      3) Yes ternary operator is also there which is "condition ? <true> : <false>"
 *         which is equivalent to an if...else statement, which we will cover in next file(s)
 *      4) only "===" and "!==" operator will check data type
 *      5) "==" and "!=" perform type coversion to perform the equality operation
 *         "Type conversion" is simply converting one data type to another
 *         "parseInt()", "parseFloat()", "String()" are some function to covert the type
 * 
 * ex: go through these console statements for any confusion
 */
console.log(1 == 2);            // false
console.log(1 == "1");          // true
console.log(1 === "1");         // false
console.log(1 === 1);           // true(as 1 is equal to 1 and both are of number data type)
console.log("1" === "1");       // true(as "1" is equal to "1" and both are of string data type)

console.log(10 > 10);           // false(because it is equal not greater)
console.log(10 >= 10);          // true(it is false for > but true for =)
console.log(5 < 5);             // false(5 is not smaller than 5, it is equal to 5)
console.log(5 <= 5);            // true
console.log(4 < 6);             // true
console.log(2 <= 9);            // true
console.log(10 > 6);            // true
console.log(10 >= 9);           // true
console.log(10 >= 14);          // false
console.log(10 >= "8");         // true(it is checking for the values only)

console.log(1 != 1);            // false
console.log(2 != 3);            // true
console.log(2 != "2");          // false
console.log(2 !== "2");         // true
console.log(2 !== 2);           // false

// console.log(10 >== "10");    // error, no greater than and strict equality is defined in JS
// because strict equality means it should be equal not greater or less

// experiment for some fun ------------------------------------------------------------------------
// you can also try some other combinations
console.log(NaN == false);          // false, but in if condition both are evaluated as false
console.log(null < Infinity);       // --->> true <<--- Magic happens in JS
console.log(undefined == null);     // true
console.log(undefined === null);    // false

console.log("a" < "b");             // true
console.log("A" < "B");             // true
console.log("a" > "A");             // true
console.log("0" > "A");             // false
console.log("Z" > "a");             // false

// above 5 used ASCII value for comparison and useful when we sort strings

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator