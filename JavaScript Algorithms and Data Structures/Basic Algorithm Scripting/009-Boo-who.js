function booWho(bool) {
    return typeof bool === 'boolean';
    // return (bool === true || bool === false)
    // return bool in [true, false]             ---->> CAN NOT USE THIS will return true for 'true' and 'false'
    // return [true, false].indexOf(bool) !== -1
}

booWho(null);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who
