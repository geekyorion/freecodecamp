// var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

/**
 * We use above method more than escape sequence one
 * It is easy to write, read and understand
 *
 * goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
 *
 * badStr = 'Finn responds, "Let's go!"';       // Throws an error
 *          ^-------------------^
 *          this part will be considered string and further part
 *          will throw error
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/quoting-strings-with-single-quotes