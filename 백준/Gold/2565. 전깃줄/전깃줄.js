const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let [[n], ...wires] = inp.map((x) => x.split(" ").map(Number));
wires.sort((a, b) => a[0] - b[0]);
let dp = Array(n).fill(1);
for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
        if (wires[i][1] > wires[j][1]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
}
console.log(n - Math.max(...dp));
