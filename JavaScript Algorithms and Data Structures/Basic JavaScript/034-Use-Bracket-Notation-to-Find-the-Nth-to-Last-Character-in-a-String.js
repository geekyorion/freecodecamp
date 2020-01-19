// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

// Setup
var lastName = "Lovelace";

// Only change code below this line
// var secondToLastLetterOfLastName = lastName;
var secondToLastLetterOfLastName = lastName[lastName.length - 2];       // solution

/**
 * Second to last character is at "length - 2"
 * so we can say if we want to get the character from last then
 *
 * var char = variableName[vairableName.length - position_of_char_from_last];
 *
 * [
 *      In python instead of going with "len(variable_name) - position_of_char_from_last"
 *      we can use negative index directly.
 *      ex:
 *          name = "GeekyOrion"
 *          # Fetch "i" (third to last letter of name)
 *          name[len(name) - 3]
 *          # or
 *          name[-3]        # No need to write the len(name), python will take care of this
 * ]
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-nth-to-last-character-in-a-string