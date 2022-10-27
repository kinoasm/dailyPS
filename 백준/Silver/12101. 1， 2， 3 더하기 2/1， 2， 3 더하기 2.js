const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
let [n, k] = inp;
let ans = [];
let dp = [1, 1, 2, 4];
while (dp.length <= 11) dp.push(dp.at(-1) + dp.at(-2) + dp.at(-3));
if (dp[n] < k) console.log(-1);
else {
    let ans = [];
    k--;
    while (n > 0) {
        if (k < dp[n - 1]) {
            ans.push(1);
            n--;
        } else if (k < dp[n - 1] + dp[n - 2]) {
            ans.push(2);
            k -= dp[n - 1];
            n -= 2;
        } else {
            ans.push(3);
            k -= dp[n - 1] + dp[n - 2];
            n -= 3;
        }
    }
    console.log(ans.join("+"));
}
