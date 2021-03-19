function spinalCase(str) {
    return str
        .split(/\s|_|(?=[A-Z])+/g)
        .join('-')
        .toLowerCase();

    /**
     * split functionality
     *      1. will search for
     *          a. \s -> space
     *          b. _ -> underscore
     *          c. (?=[A-Z]) -> and upper case letter
     *              this lookup ahead will include the index but will not include the uppercase letter
     *              so we can split the string and join using dash
     *      2. join using dash
     *      3. convert to lower case  
     */

    return str
        .replace(/([a-z])([A-Z])/g, "$1 $2")   // replace small-letter<no-space>upper-letter with small-letter<space>upper-letter
        .split(/\s+|_/)
        .join('-')
        .toLowerCase();
}

const result = spinalCase('AllThe-smallThings_does matter');
console.log(result);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case
