let arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(arr.shift().trim());
arr = arr.map((x) => x.trim().split(" ").map(Number));
let ans = 0;
arr.forEach((x) => (ans += x[0] * x[1]));
console.log(ans);
