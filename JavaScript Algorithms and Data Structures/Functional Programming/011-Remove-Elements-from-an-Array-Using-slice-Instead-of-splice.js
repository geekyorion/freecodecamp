function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.slice(0, 3);

    // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
const result = nonMutatingSplice(inputCities);
console.log(result);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/remove-elements-from-an-array-using-slice-instead-of-splice
