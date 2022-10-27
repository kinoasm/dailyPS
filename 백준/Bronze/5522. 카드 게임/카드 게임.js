let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim())
    .map(Number);
console.log(arr.reduce((a, b) => a + b, 0));
