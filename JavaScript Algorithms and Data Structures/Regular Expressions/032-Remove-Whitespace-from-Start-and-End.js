let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line

/**
 * below solution won't work cause group (.*) will take the every space after World!
 */
// let hello = "   Hello, World!  ";
// let wsRegex = /^(\s)(.*)(\s)$/;
// let result = hello.replace(wsRegex, '$2');

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/remove-whitespace-from-start-and-end
