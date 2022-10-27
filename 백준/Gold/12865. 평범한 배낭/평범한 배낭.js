let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [n, k] = arr.shift().trim().split(" ").map(Number);
let items = arr.map((x) => x.trim().split(" ").map(Number));
let dp = [];
for (let i = 0; i <= n; i++) dp.push(Array(k + 1).fill(0));
for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= k; j++) {
        if (i === 0 || j === 0) dp[i][j] = 0;
        else if (items[i - 1][0] <= j)
            dp[i][j] = Math.max(
                items[i - 1][1] + dp[i - 1][j - items[i - 1][0]],
                dp[i - 1][j]
            );
        else dp[i][j] = dp[i - 1][j];
    }
}
console.log(dp[n][k]);
