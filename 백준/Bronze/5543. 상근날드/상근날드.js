let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => Number(x.trim()));
let sum=-50;
sum+=Math.min(arr[0],arr[1],arr[2]);
sum+=Math.min(arr[3],arr[4]);
console.log(sum)