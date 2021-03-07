// using for loop
function largestOfFour(arr) {
    const ans = [];
    for (let i = 0; i < arr.length; i++) {
        let largest = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (largest < arr[i][j]) {
                largest = arr[i][j];
            }
        }
        ans.push(largest);
    }
    return ans;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// using inbuild function
function largestOfFour(arr) {
    const ans = [];
    for (let subArr of arr) {
        ans.push(Math.max(...subArr));
    }
    return ans;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//recusrion approach
function largestOfFour(arr) {
    if (!arr.length) {
        return []
    } else {
        return [Math.max(...arr.splice(0, 1)[0]), ...largestOfFour(arr)]
    }
}

var a = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// map function
function largestOfFour(arr) {
    return arr.map(subArray => Math.max(...subArray));
}

var a = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// reduce function
function largestOfFour(arr) {
    return arr.map(subArr => subArr.reduce((init, current) => init > current ? init : current));
}

var a = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays
