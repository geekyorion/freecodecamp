function convertToRoman(num) {
    const decimalRomanObj = [
        { num: 1000, symbol: "M" },
        { num: 900, symbol: "CM" },
        { num: 500, symbol: "D" },
        { num: 400, symbol: "CD" },
        { num: 100, symbol: "C" },
        { num: 90, symbol: "XC" },
        { num: 50, symbol: "L" },
        { num: 40, symbol: "XL" },
        { num: 10, symbol: "X" },
        { num: 9, symbol: "IX" },
        { num: 5, symbol: "V" },
        { num: 4, symbol: "IV" },
        { num: 1, symbol: "I" }
    ];

    let ans = "";
    let checker = 0;
    while (num > 0) {
        while (num >= decimalRomanObj[checker].num) {
            ans += decimalRomanObj[checker].symbol;
            num -= decimalRomanObj[checker].num;
        }
        checker++;
    }
    return ans;
}

const result = convertToRoman(36);
console.log(result);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
