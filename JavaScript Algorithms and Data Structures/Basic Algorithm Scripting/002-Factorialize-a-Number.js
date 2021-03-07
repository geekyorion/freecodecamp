// using recursion
function factorialize(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorialize(num - 1);
}

factorialize(5);


// using loop
function factorialize(num) {
    let ans = 1;
    while (num > 1) {
        ans *= num--;
    }
    return ans;
}

factorialize(5);


// using eval
function factorialize(num) {
    return eval([...Array.from(new Array(num), (_value, index) => (index + 1))].join('*')) || 1;
}

factorialize(5);


// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number
