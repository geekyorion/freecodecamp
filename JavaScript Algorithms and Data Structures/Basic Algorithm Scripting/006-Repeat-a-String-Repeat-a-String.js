// using loop
function repeatStringNumTimes(str, num) {
    let ans = '';
    while (num-- > 0) {
        ans += str;
    }
    return ans;
}

repeatStringNumTimes("abc", 3);


// using Array join
function repeatStringNumTimes(str, num) {
    return num > 0 ? Array.from(new Array(num), () => str, null).join('') : '';
}

repeatStringNumTimes("abc", 3);


// recusrion
function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

repeatStringNumTimes("abc", 3);


// repeat method - don't use for submit
function repeatStringNumTimes(str, num) {
    return num > 0 ? str.repeat(num) : '';
}

repeatStringNumTimes("abc", 3);


// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string
