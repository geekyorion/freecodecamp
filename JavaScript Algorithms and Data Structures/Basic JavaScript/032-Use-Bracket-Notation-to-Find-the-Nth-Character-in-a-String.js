// Example
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
// var thirdLetterOfLastName = lastName;
var thirdLetterOfLastName = lastName[2];        // solution

/**
 * Index is a very confusing part for newbies.
 * Always keep in the mind that computer starts counting from 0 not from 1
 * so third character is going to be    [0 index - First Character],
 *                                      [1 index - Second Character],
 *                                      [2 index - Third Character],
 *                                      so on ...
 *
 * Note: Strings are immuatable but it doesn't mean that we can not access a character from a string
 * using a particular index. Though we can not change that character.
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-nth-character-in-a-string