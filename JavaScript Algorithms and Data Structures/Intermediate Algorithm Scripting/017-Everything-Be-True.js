function truthCheck(collection, pre) {
    return collection.every(obj => Boolean(obj[pre]));
    // return collection.every(obj => obj[pre]);    // Boolean is not necessary
}

const result = truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");
console.log(result);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true
