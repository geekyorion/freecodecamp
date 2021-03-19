const priceMap = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]
];

function checkCashRegister(price, cash, cid) {
    const result = { status: null, change: [] };
    const totalAmount = cid.reduce((init, curr) => curr[1] + init, 0);
    let rest = cash - price;
    if (rest === totalAmount) {
        result.status = "CLOSED";
        result.change = cid;
    } else if (rest > totalAmount) {
        result.status = "INSUFFICIENT_FUNDS";
    } else {
        const change = [];
        const cid_obj = {};
        cid.forEach(cid_item => {
            cid_obj[cid_item[0]] = cid_item[1];
        });

        for (let i = 0; i < priceMap.length; i++) {
            const checkForChange = parseInt(rest / priceMap[i][1]);
            const numberOfNotes = Math.min((cid_obj[priceMap[i][0]] / priceMap[i][1]), checkForChange);
            const amount = numberOfNotes * priceMap[i][1];
            if (amount) {
                change.push([priceMap[i][0], amount]);
            }
            rest = +(rest - amount).toFixed(2);
        }
        if (rest !== 0) {
            result.status = "INSUFFICIENT_FUNDS";
            result.change = [];
        } else {
            result.status = "OPEN";
            result.change = change;
        }
    }
    return result;
}

const result = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(result);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
