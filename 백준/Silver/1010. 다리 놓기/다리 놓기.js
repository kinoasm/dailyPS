const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const [[n], ...list] = inp.map((x) => x.split(" ").map(Number));
let ans = [];
let dp = [];
for (let i = 0; i <= 30; i++) dp.push(Array(31).fill(0));
for (let i = 1; i <= 30; i++) {
    for (let j = 1; j <= 30; j++) {
        if (i == j || j == 1) dp[i][j] = 1;
        else {
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
        }
    }
}
for (let i of list) {
    let [a, b] = i;
    if (a < b) [a, b] = [b, a];
    ans.push(dp[a + 1][b + 1]);
}
console.log(ans.join("\n"));
