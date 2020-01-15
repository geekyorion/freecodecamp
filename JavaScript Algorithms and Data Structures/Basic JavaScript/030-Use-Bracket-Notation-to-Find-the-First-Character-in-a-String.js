// Example
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];    // solution

/**
 * Index or position of character in string starts with 0 [not with 1]
 * so instead of counting 1, 2, 3, 4, ...
 * it's time to add somrthing important i.e. 0 in front
 * so in computer system or any programming language
 * we start count from 0 to n-1
 *
 * using [index] we can fetch the character at that index
 * ex:
 *      1) "GeekyOrion"[5]      output --->>    "O"
 *      2) "GeekyOrion"[10]     output --->>    "undefined"
 *          because characters are 10 but last index is 9
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-first-character-in-a-string