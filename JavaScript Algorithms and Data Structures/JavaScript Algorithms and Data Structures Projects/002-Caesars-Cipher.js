function rot13(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let ascii = str.charCodeAt(i);
        if (ascii <= 90 && ascii >= 65) {
            ascii = ascii - 13;
            if (ascii < 65) {
                ascii = ascii + 26;
            }
        }
        ans += String.fromCharCode(ascii);
    }
    return ans;
}

const result = rot13("SERR PBQR PNZC");
console.log(result);


// using regex
function rot13(str) {
    return str.replace(/[A-Z]/g, (match) => String.fromCharCode(match.charCodeAt(0) % 26 + 65));
}

const result = rot13("SERR PBQR PNZC");
console.log(result);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
