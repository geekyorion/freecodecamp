function countOnline(usersObj) {
    // Only change code below this line
    let onlineUsers = 0;
    for (let user in usersObj) {
        if (usersObj[user].online) {
            onlineUsers++;
        }
    }
    return onlineUsers;
    // Only change code above this line
}

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-the-keys-of-an-object-with-a-for---in-statement
