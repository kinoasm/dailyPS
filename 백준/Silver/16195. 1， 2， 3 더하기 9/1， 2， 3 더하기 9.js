const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let num = inp.slice(1).map((x) => x.split(" ").map(Number));
let ans = [];
let dp = [];
for (let i = 0; i <= 1000; i++) dp.push(Array(1001).fill(0));
dp[2][1] = 1;
dp[3][1] = 1;
for (let i = 1; i <= 1000; i++) {
    for (let j = 1; j <= 1000; j++) {
        dp[i][j] =
            (dp[i - 1][j - 1] +
                (i > 2 ? dp[i - 2][j - 1] : 0) +
                (i > 3 ? dp[i - 3][j - 1] : 0)) %
            1000000009;
        if (j == 1 && i <= 3) dp[i][j] = 1;
    }
}
for (let i = 1; i <= 1000; i++) {
    let now = 0;
    for (let j = 1; j <= 1000; j++) {
        now = (now + dp[i][j]) % 1000000009;
        dp[i][j] = now;
    }
}
for (let i of num) ans.push(dp[i[0]][i[1]]);
console.log(ans.join("\n"));
