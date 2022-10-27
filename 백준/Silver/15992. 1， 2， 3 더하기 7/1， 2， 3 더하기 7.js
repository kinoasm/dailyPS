const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let num = inp.slice(1).map((x) => x.split(" ").map(Number));
let ans = [];
let dp = [];
for (let i = 0; i < 1001; i++) dp.push(Array(1000).fill(0));
dp[1][1] = 1;
dp[2][1] = 1;
dp[3][1] = 1;
for (let i = 1; i < 1000; i++) {
    for (let j = 1; j < 1000; j++) {
        dp[i + 1][j + 1] = (dp[i][j] + dp[i + 1][j + 1]) % 1000000009;
        if (i + 2 <= 1000)
            dp[i + 2][j + 1] = (dp[i][j] + dp[i + 2][j + 1]) % 1000000009;
        if (i + 3 <= 1000)
            dp[i + 3][j + 1] = (dp[i][j] + dp[i + 3][j + 1]) % 1000000009;
    }
}
for (let i of num) ans.push(dp[i[0]][i[1]]);
console.log(ans.join("\n"));
