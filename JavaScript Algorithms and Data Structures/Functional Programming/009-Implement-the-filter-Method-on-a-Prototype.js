// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
    // Only change code below this line
    var newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newArray.push(this[i]);
        }
    }
    // Only change code above this line
    return newArray;
};

var new_s = s.myFilter(function (item) {
    return item % 2 === 1;
});

console.log(new_s);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/implement-the-filter-method-on-a-prototype
