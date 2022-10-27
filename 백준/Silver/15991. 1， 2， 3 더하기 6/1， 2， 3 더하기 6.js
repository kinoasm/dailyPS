const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let num = inp.slice(1).map(Number);
let ans = [];
let max = Math.max(...num);
let dp = [1, 1, 2, 2, 3, 3];
while (dp.length <= max)
    dp.push((dp.at(-2) + dp.at(-4) + dp.at(-6)) % 1000000009);
for (let i of num) ans.push(dp[i]);
console.log(ans.join("\n"));
