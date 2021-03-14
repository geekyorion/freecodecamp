// Only change code below this line
function urlSlug(title) {
    return title
        .toLowerCase()
        .split(/\W+/)
        .filter(str => str.match(/\w+/))
        .join('-');

    // using trim
    return title
        .toLowerCase()
        .trim()
        .split(/\W+/)
        .join('-');

    // filter the empty string
    return title
        .toLowerCase()
        .split(' ')
        .filter(str => str !== '')
        .join('-');
}
// Only change code above this line

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs
