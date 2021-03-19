function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    return arr.map(debris => ({
        name: debris.name,
        orbitalPeriod: +(2 * Math.PI * (Math.sqrt(((debris.avgAlt + earthRadius) ** 3) / GM))).toFixed(0)
    }));
}

const result = orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
console.log(result);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris
