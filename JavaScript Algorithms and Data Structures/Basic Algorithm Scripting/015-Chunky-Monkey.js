// loop
function chunkArrayInGroups(arr, size) {
    const ans = [];
    while (arr.length > size) {
        ans.push(arr.splice(0, size));
    }
    ans.push(arr);
    return ans;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


// recursion
function chunkArrayInGroups(arr, size) {
    if (arr.length <= size) {
        return [arr];
    }
    return [arr.splice(0, size), ...chunkArrayInGroups(arr, size)];
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey
