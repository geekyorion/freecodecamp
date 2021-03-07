// using object to find the key - hash table approach - faster
function mutation(arr) {
    const heap = {};
    for (let elem of arr[0].toLowerCase()) {
        heap[elem] = true;
    }
    for (let elem of arr[1].toLowerCase()) {
        if (!heap[elem]) {
            return false;
        }
    }
    return true;
}

mutation(["hello", "hey"]);

// using every() method
function mutation(arr) {
    arr = arr.map(str => str.toLowerCase())
    return arr[1].split('').every(letter => arr[0].indexOf(letter) !== -1);
}

mutation(["hello", "hey"]);


// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations
