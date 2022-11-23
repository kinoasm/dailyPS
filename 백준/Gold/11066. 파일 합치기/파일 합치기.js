const [[t], ...list] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim().split(" ").map(Number));
let ans = [];
for (let q = 0; q < t; q++) {
    const n = list.slice(2 * q, 2 * q + 1)[0][0];
    const numbers = list.slice(2 * q + 1, 2 * q + 2)[0];
    let now = numbers[0];
    const sum = [0, now];
    let idx = 1;
    while (idx < n) {
        now += numbers[idx];
        sum.push(now);
        idx++;
    }
    let dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
    for (let i = 1; i < n; i++) {
        for (let j = 1; i + j <= n; j++) {
            dp[j][i + j] = Infinity;
            for (let k = j; k < i + j; k++) {
                dp[j][i + j] = Math.min(
                    dp[j][i + j],
                    dp[j][k] + dp[k + 1][i + j]
                );
            }
            dp[j][i + j] += sum[i + j] - sum[j - 1];
        }
    }
    ans.push(dp[1][n]);
}
console.log(ans.join("\n"));
