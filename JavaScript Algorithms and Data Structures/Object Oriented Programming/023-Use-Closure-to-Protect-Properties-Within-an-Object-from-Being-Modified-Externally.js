function Bird() {
    let weight = 15;
    this.getWeight = () => {
        // no need to use this keyword here
        // 1. it is not a class variable and only available in the function scope
        // 2. closure provide the access level to this function for the context in which it is created
        return weight;
    }
}

let bird = new Bird();
console.log(bird.getWeight());  // 15;

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-closure-to-protect-properties-within-an-object-from-being-modified-externally
