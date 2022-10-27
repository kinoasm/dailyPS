let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [n] = arr.shift().trim().split(" ").map(Number);
arr = arr.map((x) => Number(x.trim())).sort((a, b) => a - b);
let res = "";
for (let i in arr) res += arr[i] + "\n";
console.log(res.trim());
