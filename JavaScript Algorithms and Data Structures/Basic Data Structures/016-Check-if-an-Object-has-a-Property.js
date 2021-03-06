let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(obj) {
    // Only change code below this line
    return (('Alan' in obj) && (obj.hasOwnProperty('Jeff')) && ('Sarah' in obj) && ('Ryan' in obj));
    // Only change code above this line
}

console.log(isEveryoneHere(users));

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-if-an-object-has-a-property
