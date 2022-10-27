let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [t] = arr.shift().trim().split(" ").map(Number);
let res = "";
arr = arr.map((x) => Number(x.trim()));
let max = arr.reduce((a, b) => Math.max(a, b), arr[0]);
let dp = [0, 1, 2, 4];
for (let i = 4; i <= max; i++) {
    dp.push(dp[i - 1] + dp[i - 2] + dp[i - 3]);
}
for (let i in arr) res += dp[arr[i]] + "\n";
console.log(res.trim());
