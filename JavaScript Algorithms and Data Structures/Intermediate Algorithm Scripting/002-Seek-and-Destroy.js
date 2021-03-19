function destroyer(arr) {
    const removeArr = Object.values(arguments).slice(1);
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        let addThisToResult = true;
        for (let j = 0; j < removeArr.length; j++) {
            if (arr[i] === removeArr[j]) {
                addThisToResult = false;
                break;
            }
        }
        if (addThisToResult) {
            result.push(arr[i]);
        }
    }
    return result;

    // we can also write above lines as below
    return arr.filter(value => removeArr.indexOf(value) === -1);
}

const result = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(result);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy
