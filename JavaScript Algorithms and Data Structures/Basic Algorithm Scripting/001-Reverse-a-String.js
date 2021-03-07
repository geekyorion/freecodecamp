function reverseString(str) {
    return str.split('').reverse().join('');
}

reverseString("hello");

// Smiple solution using for loop
function reverseString(str) {
    let ans = '';
    for (let i = 0; i < str.length; i++) {
        ans = str[i] + ans;
    }
    return ans;
}

reverseString("hello");


// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string
