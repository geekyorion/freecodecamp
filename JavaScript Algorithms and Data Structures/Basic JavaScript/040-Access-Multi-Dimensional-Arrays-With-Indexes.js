// Setup
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];

// Only change code below this line.
// var myData = myArray[0][0];
var myData = myArray[2][1];     // solution

/**
 * We can access the multi-dimensional array using index like above.
 * Consider an array arr like below:
 *
 *      var arr = [
 *                    [1, 2, 3],
 *                    [4, 5, 6],
 *                    [7, 8, [9, 10]],
 *                    [
 *                        [11, [12, [13]]],
 *                        [14, 15]
 *                    ]
 *                ];
 *
 *      // how we are going to console 13
 *      console.log(arr[3][0][1][1][0]);    --->> it will console 13
 *      // arr[3][0][1][1][0] => <[[11, [12, [13]]], [14,15]]>[0][1][1][0] => <[11, [12, [13]]]>[1][1][0] => <[12, [13]]>[1][0] => <[13]>[0] => 13
 *                               ^----------arr[3]-----------^                ^---arr[3][0]----^             ^----------^          ^----^
 */

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/access-multi-dimensional-arrays-with-indexes