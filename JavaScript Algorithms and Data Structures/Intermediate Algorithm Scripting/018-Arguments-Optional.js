function addTogether() {
    const args = Object.values(arguments);
    const isValid = args.every(num => typeof num === 'number');
    if (isValid) {
        if (args.length === 2) {
            return args[0] + args[1]
        } else if (args.length === 1) {
            return (num2) => typeof num2 === 'number' ? num2 + args[0] : undefined;
        }
    }
}

const result = addTogether(2)([3]);
console.log(result);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional
