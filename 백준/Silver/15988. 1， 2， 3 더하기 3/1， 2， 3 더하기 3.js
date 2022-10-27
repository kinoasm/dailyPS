const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let num = inp.slice(1).map(Number);
let ans = [];
let max = Math.max(...num);
let dp = [0, 1, 2, 4];
while (dp.length <= max)
    dp.push((dp.at(-1) + dp.at(-2) + dp.at(-3)) % 1000000009);
for (let i of num) ans.push(dp[i]);
console.log(ans.join("\n"));
