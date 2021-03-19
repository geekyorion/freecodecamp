function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line

    for (let obj of collection) {
        let shouldAdd = true;
        for (let check in source) {
            if (obj[check] !== source[check]) {
                shouldAdd = false;
                break;
            }
        }
        if (shouldAdd) {
            arr.push(obj);
        }
    }

    // Only change code above this line
    return arr;
}

const result = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

console.log(result);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou
