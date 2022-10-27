let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => Number(x.trim()));
let sum = 0;
for (let i in arr) sum += Math.max(arr[i], 40);
console.log(sum / 5);
