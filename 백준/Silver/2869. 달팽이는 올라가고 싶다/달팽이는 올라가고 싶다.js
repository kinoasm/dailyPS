let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
let n = Math.ceil((arr[2] - arr[0]) / (arr[0] - arr[1])) + 1;
console.log(n);
