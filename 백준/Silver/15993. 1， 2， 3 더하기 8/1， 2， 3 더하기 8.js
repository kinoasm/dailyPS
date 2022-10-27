const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let num = inp.slice(1).map(Number);
let max = Math.max(...num);
let ans = [];
let dp = [];
for (let i = 0; i <= max; i++) dp.push(Array(2).fill(0));
dp[0][1] = 1;
dp[1][0] = 1;
dp[2][0] = 1;
dp[2][1] = 1;
dp[3][0] = 1;
for (let i = 3; i <= max; i++) {
    dp[i][1] = (dp[i - 1][0] + dp[i - 2][0] + dp[i - 3][0]) % 1000000009;
    dp[i][0] = (dp[i - 1][1] + dp[i - 2][1] + dp[i - 3][1]) % 1000000009;
}
for (let i of num) ans.push(dp[i]);
console.log(ans.map((x) => x.join(" ")).join("\n"));
