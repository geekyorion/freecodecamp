function translatePigLatin(str) {
    return str
        .replace(/^([^aeiou]+)(.*)/, '$2$1')
        .concat(/^[^aeiou]/.test(str) ? 'ay' : 'way');


    return str
        .replace(/^([aeiou]\w+)/, "$1way")
        .replace(/^([^aeiou]+)(\w*)/, "$2$1ay")

    return str
        .replace(/^[aeiou]\w+/, "$&way")
        .replace(/^([^aeiou]+)(\w*)/, "$2$1ay")

    /**
     * some of the regex useful things
     *      $$ -> add dollar sign
     *      $& -> add matched string
     *      $n -> add the matching group
     */
}

const result = translatePigLatin("schwartz");
console.log(result);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin
