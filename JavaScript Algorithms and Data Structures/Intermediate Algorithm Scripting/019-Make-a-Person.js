var Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let nameArr = firstAndLast.split(" ");
    this.getFullName = function () {
        return nameArr.join(" ");
    };
    this.getFirstName = () => nameArr[0];
    this.getLastName = () => nameArr[1];
    this.setFullName = (firstAndLast) => nameArr = firstAndLast.split(" ");
    this.setFirstName = (firstName) => nameArr[0] = firstName;
    this.setLastName = (lastName) => nameArr[1] = lastName;
};

var bob = new Person('Bob Ross');
const result = bob.getFullName();
console.log(result);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person
