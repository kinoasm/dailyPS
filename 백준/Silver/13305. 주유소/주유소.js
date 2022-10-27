const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const [[n], distance, cost] = inp.map((x) => x.split(" ").map(Number));
let min = cost[0];
let total = 0;
for (let i = 1; i < n; i++) {
    total += min * distance[i - 1];
    if (cost[i] < min) min = cost[i];
}
console.log(total);
