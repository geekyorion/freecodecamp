// Setup
var myStr = "Jello World";

// Only change code below this line

// myStr[0] = "H"; // Fix Me
myStr = "Hello World";      // solution

/**
 * Strings are immutable i.e. the content can not be changed at that specific address
 * On the other hand, we can assign new string to that variable.
 * If we assign the new string to the variable then it will take new address pointer
 * [address pointer --->> from where out string starts in memory]
 *
 * ex:  var name = "Orion";
 *          stored at 0x555 memory pointer then if we want to change the "Orion" to "OrioN"
 *
 *      name[4] = "N";      // it will throw an error because we store string as a single entity
 *                          // so to change it's part we need to change it completely
 *
 *      name = "OrioN";     // it will work
 *                          // it will store "OrioN" at 0x666 memory pointer then it will assign
 *                          // this memory pointer to name so that it can read this string now
 *
 * Note: Here memory address are only for example. In reality, memory address is like 0x7f43a2d36b58
 * and these are stored in the RAM.
 *
 * [
 *      In python you can use id(variable_name) to print the address on a variable
 *      ex:
 *          name = "Orion";
 *          print(id(name))         --->> will print "139928471300952"
 *          # print decimal value
 *          print(hex(id(name)))    --->> will print "0x7f43a2d36b58"
 *          # print hex value
 *          # <<--- this is a python single line comment
 * ]
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understand-string-immutability