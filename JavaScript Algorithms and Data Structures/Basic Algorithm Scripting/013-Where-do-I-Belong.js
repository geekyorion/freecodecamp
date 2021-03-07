// using filter
const getIndexToIns = (arr, num) => arr.filter(arrEl => arrEl < num).length;
getIndexToIns([40, 60], 50);


// no need to sort cause we want the number of smaller elements than num
function getIndexToIns(arr, num) {
    let ans = 0;
    for (let arrEl of arr) {
        if (arrEl < num) {
            ans++;
        }
    }
    return ans;
}

getIndexToIns([40, 60], 50);


// using sorting
function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a, b) => a - b);
    return arr.indexOf(num);
}
getIndexToIns([40, 60], 50);


// using findIndex - return index where the condition will return true or -1
function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
    const ans = arr.findIndex(arrEl => num <= arrEl);
    return ans === -1 ? arr.length : ans;
}
getIndexToIns([10, 20, 30, 40, 50], 30);


// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong
