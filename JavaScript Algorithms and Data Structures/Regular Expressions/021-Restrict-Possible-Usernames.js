let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|[a-z]+\d\d+$/i; // Change this line
let result = userCheck.test(username);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/restrict-possible-usernames
