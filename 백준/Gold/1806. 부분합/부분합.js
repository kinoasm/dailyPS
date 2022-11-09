const [[n, s], list] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim().split(" ").map(Number));
let sum = [0];
let now = 0;
for (let i = 0; i < n; i++) {
    now += list[i];
    sum.push(now);
}
let min = n + 2;
let start = 0;
let end = 0;
while (end <= n) {
    let partial = sum[end] - sum[start];
    if (partial >= s) {
        start++;
        if (end - start + 1 < min) min = end - start + 1;
    } else end++;
}
console.log(min === n + 2 ? 0 : min);
