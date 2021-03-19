function fearNotLetter(str) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const first = alpha.indexOf(str[0]);
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== alpha[i + first]) {
            return alpha[i + first];
        }
    }
}

const result = fearNotLetter("stvwx");
console.log(result);


// using charCodeAt and fromCharCode
function fearNotLetter(str) {
    const indexController = str.charCodeAt(0);
    for (let i = 1; i < str.length; i++) {
        if (str[i] !== String.fromCharCode(indexController + i)) {
            return String.fromCharCode(indexController + i);
        }
    }

    // or [use one of the for loop]
    for (let i = 1; i < str.length; i++) {
        if (str.charCodeAt(i) !== indexController + i) {
            return String.fromCharCode(indexController + i);
        }
    }
}

const result = fearNotLetter("stvwx");
console.log(result);


// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters
