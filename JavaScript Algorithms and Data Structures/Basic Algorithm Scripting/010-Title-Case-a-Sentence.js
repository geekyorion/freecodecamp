// using split and join -> will preserve the tab, new line, etc...
function titleCase(str) {
    return str
        .toLowerCase()
        .split('\n')
        .map(line => line
            .split(' ')
            .map(subStr => (subStr && subStr[0].toUpperCase().concat(subStr.substr(1))) || "").join(' ')
        ).join('\n');
}
titleCase("I'm a little tea pot");


// using regex
function titleCase(str) {
    return str.replace(/(^|\s)\S/g, match => match.toUpperCase());
}

titleCase("I'm a little tea pot");

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence
