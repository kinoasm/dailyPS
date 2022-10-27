const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let list = inp.slice(1)[0].split(" ").map(Number);
let n = list.length;
const count = (arr) => {
    let sum = 0;
    let last = arr[0];
    for (let i = 1; i < n; i++) {
        sum += Math.abs(arr[i] - last);
        last = arr[i];
    }
    return sum;
};
let max = 0;
const pickAll = (pick, left) => {
    if (pick.length === n) {
        let now = count(pick);
        if (now > max) max = now;
    } else {
        left.forEach((value, index, array) => {
            pickAll(
                [...pick, value],
                array.filter((x, i) => i != index)
            );
        });
    }
};
pickAll([], list);
console.log(max);
