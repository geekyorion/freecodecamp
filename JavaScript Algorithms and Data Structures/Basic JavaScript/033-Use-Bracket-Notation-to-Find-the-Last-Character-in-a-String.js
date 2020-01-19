// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
// var lastLetterOfLastName = lastName;
var lastLetterOfLastName = lastName[lastName.length - 1];        // solution

/**
 * In 029-Find-the-length-of-a-string.js, we calculated the length of a string
 * Here we can use that concept to fetch the last character of a string
 *
 * In above program, "Lovelace" is of 8 length but last character is at 7th index
 * so we just need to subtract 1 from its length to get the last character
 * so lastName[lastName.length - 1] => lastName[8 - 1] => lastName[7] => "e"
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-last-character-in-a-string