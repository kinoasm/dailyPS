let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let n = arr.shift().trim().split(" ").map(Number)[0];
let v = arr.pop().trim().split(" ").map(Number)[0];
arr = arr[0].trim().split(" ").map(Number);
console.log(arr.filter((x) => x == v).length);
