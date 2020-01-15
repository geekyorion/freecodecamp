// var myStr; // Change this line

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";     // solution

/*  output will be:

    FirstLine               <<--- \n will provide new line
        \SecondLine         <<--- \t will provide tab and \\ will print \
    ThirdLine               <<--- in new line due to \n
*/

/**
 * Mainly we use below escape sequences:
 *
 *   ^  1) \'   output --->>    single quote (')
 *   ^  2) \"   output --->>    double quote (")
 *   ^  3) \\   output --->>    backslash (\)
 *      4) \n   output --->>    new line
 *      5) \r   output --->>    carriage return
 *      6) \t   output --->>    horizontal tab
 *      7) \v   output --->>    vertical tab
 *      8) \b   output --->>    word boundary or backspace
 *      9) \f   output --->>    form feed
 *
 * [
 *      We can use %%d to print %d in C ;)
 *      use --->> printf("%%d");
 * ]
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/escape-sequences-in-strings