const [[n, m], size, value] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim().split(" ").map(Number));
let ans = value.reduce((a, b) => a + b, 0);
let dp = Array.from({ length: n + 1 }, () => Array(ans + 1).fill(0));
for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= ans; j++) {
        if (value[i - 1] <= j)
            dp[i][j] = Math.max(
                dp[i - 1][j],
                dp[i - 1][j - value[i - 1]] + size[i - 1]
            );
        else dp[i][j] = dp[i - 1][j];
        if (dp[i][j] >= m && j < ans) ans = j;
    }
}
console.log(ans);
