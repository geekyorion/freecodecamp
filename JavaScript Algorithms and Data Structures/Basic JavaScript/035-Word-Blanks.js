var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// var wordBlanks = ""; // Only change this line;

wordBlanks = myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";      // solution
// wordBlanks = `${myAdjective} ${myNoun} ${myVerb} ${myAdverb}.`;                  // ES6 solution
// will print "big dog ran quickly."

/**
 * If you remember the ES6 syntax [027-Constructing-Strings-with-Variables.js]
 * then you can do this in following way:
 *
 * wordBlanks = `${myAdjective} ${myNoun} ${myVerb} ${myAdverb}.`;
 *              ^              ^         ^         ^           ^        <<--- it will take these spaces and period in output
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/word-blanks