// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    var newArray = [];
    // Only change code below this line
    this.forEach(num => newArray.push(callback(num)));
    // Only change code above this line
    return newArray;
};

var new_s = s.myMap(function (item) {
    return item * 2;
});

console.log(new_s);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/implement-map-on-a-prototype
