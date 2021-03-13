function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

/**
 * similar to previous one
 *  Bird.prototype = {
 *      constructor = Bird;
 *  }
 */

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor)       // [Function: Bird]
// console.log(duck.constructor)       // [Function: Animal]  --->> in case of when we remove Line#10

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/reset-an-inherited-constructor-property
