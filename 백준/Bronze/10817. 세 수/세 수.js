let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
console.log(arr.sort((a, b) => a - b)[1]);
