const [a, b] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let dp = [];
for (let i = 0; i <= a.length; i++) dp.push(Array(b.length + 1).fill([0, ""]));
for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
        if (a[i - 1] === b[j - 1]) {
            let last = dp[i - 1][j - 1];
            dp[i][j] = [last[0] + 1, last[1] + a[i - 1]];
        } else {
            let x = dp[i - 1][j];
            let y = dp[i][j - 1];
            if (x[0] < y[0]) dp[i][j] = y;
            else dp[i][j] = x;
        }
    }
}
let ans = dp[a.length][b.length];
if (ans[0] === 0) console.log(0);
else console.log(ans.join("\n"));
