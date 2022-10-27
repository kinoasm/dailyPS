const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n")
    .map((x) => x.trim());
let [[n], list] = inp.map((x) => x.split(" ").map(Number));
let dp = [list[0]];
for (let i = 1; i < n; i++) {
    let max = list[i];
    for (let j = 0; j < dp.length; j++)
        max = Math.max(max, dp[j] + list[i - j - 1]);
    dp.push(max);
}
console.log(dp.at(-1));
