function telephoneCheck(str) {
    return /^(1\s?)?(\(\d{3}\)\s?|\d{3}[\s-]?)(\d{3}[\s-]?)(\d{4})$/.test(str);
}

telephoneCheck("555-555-5555");

/**
 * breakdown of regex
 *      ^(1\s?)? --->> means it can start with 1 and after 1 a whitespace is optional or the whole group is optional
 *      (\(\d{3}\)\s?|\d{3}[\s-]?) --->> we have two groups here
 *          \(\d{3}\)\s?  --->>  will check whether number is in '(ddd)' format or not and a whitespace after that is optional
 *          \d{3}[\s-]?   --->>  or number is in 'ddd' format or not and then we can have a whitespace or a dash
 *      (\d{3}[\s-]?)  --->> will check for 'ddd' format with optional whitespace or a dash appended to it
 *      (\d{4})$   --->> should end with 4 digits
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator
