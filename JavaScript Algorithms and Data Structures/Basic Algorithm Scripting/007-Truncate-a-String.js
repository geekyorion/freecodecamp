function truncateString(str, num) {
    return num < str.length ? str.substr(0, num).concat('...') : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string
