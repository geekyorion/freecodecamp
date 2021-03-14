function splitify(str) {
    // Only change code below this line

    return str.split(/[^a-z0-9]/i);
    /**
     * \W can be used cause \W is [^0-9a-zA-Z_]
     */
    // return str.split(/\W/);

    // Only change code above this line
}
const result = splitify("Hello World,I-am code");
console.log(result);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/split-a-string-into-an-array-using-the-split-method
