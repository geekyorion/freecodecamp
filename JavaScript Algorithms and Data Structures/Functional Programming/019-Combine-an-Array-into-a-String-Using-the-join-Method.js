function sentensify(str) {
    // Only change code below this line

    return str.split(/\W/).join(' ');

    // Only change code above this line
}
const result = sentensify("May-the-force-be-with-you");
console.log(result);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/combine-an-array-into-a-string-using-the-join-method
