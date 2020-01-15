// Example
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line.

// lastNameLength = lastName;
lastNameLength = lastName.length;       // solution

/**
 * length will return the character count in the string
 * including white space, new line, etc
 *
 * Note:
 *      1) \n, \t, \r, \b, \\, \', \", etc will return 1 length only
 *      2) first backslash is ignored while calculating the length
 *
 *      ex:
 *          "this\t\qa\nstr ing".length      output --->>    15
 *           ^^^^ ^ ^^ ^^^^^^^^
 *
 *          here \q is not a valid escape sequence but
 *          it will count \q as 1
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/find-the-length-of-a-string