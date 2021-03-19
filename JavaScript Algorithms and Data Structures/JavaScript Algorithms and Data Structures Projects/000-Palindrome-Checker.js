function palindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return str === str.split("").reverse().join("");
}

palindrome("eye12&*^%sda_ads21*eye");


// using for loop
function palindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const last = str.length - 1;
    for (let i = 0; i < parseInt((last + 1) / 2); i++) {
        if (str[i] !== str[last - i]) {
            return false;
        }
    }
    return true;
}

palindrome("eye12sd&*^%sdf_ads123*asd");

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker
