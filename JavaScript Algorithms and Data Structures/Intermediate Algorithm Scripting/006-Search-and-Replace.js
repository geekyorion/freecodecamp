function myReplace(str, before, after) {
    return str
        .replace(before, after
            .replace(after[0], before.match(/^[A-Z]/)
                ? after[0].toUpperCase()
                : after[0].toLowerCase()
            ));
}

const result = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped");
console.log(result);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace
