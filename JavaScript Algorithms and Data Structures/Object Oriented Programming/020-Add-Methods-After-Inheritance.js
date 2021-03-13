function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log('Woof!');
}


// DO NOT USE THE BELOW CODE, WON'T WORK
// cause it will replace the Animal prototype with given object

// Dog.prototype = {
//     constructor: Dog,
//     bark: function () {
//         console.log('Woof!');
//     }
// }


// Only change code above this line

let beagle = new Dog();

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/add-methods-after-inheritance
