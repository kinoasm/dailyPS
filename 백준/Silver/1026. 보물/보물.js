let arr = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [n] = arr.shift().trim().split(" ").map(Number);
let a = arr
    .slice(0, 1)
    .map((x) => x.trim().split(" ").map(Number))[0]
    .sort((a, b) => a - b);
let b = arr
    .slice(1)
    .map((x) => x.trim().split(" ").map(Number))[0]
    .sort((a, b) => b - a);
let ans = 0;
for (let i in a) ans += a[i] * b[i];
console.log(ans);
