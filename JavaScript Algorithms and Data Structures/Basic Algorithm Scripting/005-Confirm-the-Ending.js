// using endsWith but can not use to submit the solution
function confirmEnding(str, target) {
    return str.endsWith(target);
}

confirmEnding("Bastian", "n");


// various methods
function confirmEnding(str, target) {
    // using substr(start, size?) [with negative index]

    // return str.substr(str.length - target.length) === target;
    // return str.substr(-target.length) === target;


    // slice(start, end) can be used with string
    // substring(start, end) is for strings -> doesn't take negative index

    return str.substring(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");


// regex
function confirmEnding(str, target) {
    const reg = new RegExp(`${target}\$`, '');
    return reg.test(str);
}
confirmEnding("Bastian", "n");

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending
