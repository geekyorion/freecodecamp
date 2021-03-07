function findLongestWordLength(str) {
    return Math.max(...str.split(' ').map(part => part.length));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string
