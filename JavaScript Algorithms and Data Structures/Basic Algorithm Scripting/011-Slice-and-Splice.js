function frankenSplice(arr1, arr2, n) {
    const ans = [...arr2];
    ans.splice(n, 0, ...arr1);
    return ans;
}

var a = frankenSplice([1, 2, 3], [4, 5, 6], 1);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice
