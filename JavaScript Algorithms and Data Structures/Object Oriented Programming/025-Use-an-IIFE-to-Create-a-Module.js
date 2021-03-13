let isCuteMixin = function (obj) {
    obj.isCute = function () {
        return true;
    };
};
let singMixin = function (obj) {
    obj.sing = function () {
        console.log("Singing to an awesome tune");
    };
};

// created below module for mixins

const funModule = (() => ({
    isCuteMixin: (obj) => {
        obj.isCute = () => true;
    },
    singMixin: (obj) => {
        obj.sing = () => {
            console.log('Singing to an awesome tune');
        }
    }
}))();

const testObj = {};
console.log(testObj.isCute);        // undefined
funModule.isCuteMixin(testObj);
console.log(testObj.isCute);        // [Function]
console.log(testObj.isCute());      // true

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-an-iife-to-create-a-module
