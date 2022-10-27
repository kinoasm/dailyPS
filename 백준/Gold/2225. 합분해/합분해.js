const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
let [n, k] = inp;
let dp = [Array(k).fill(1)];
while (dp.length <= n) {
    let row = [1, dp.length + 1];
    for (let i = 2; i < k; i++) {
        let now = row.at(-1);
        for (let j = 0; j < dp.length; j++) {
            now = (now + dp[j][i - 1]) % 1000000000;
        }
        row.push(now);
    }
    dp.push(row);
}
console.log(dp[n][k - 1]);
