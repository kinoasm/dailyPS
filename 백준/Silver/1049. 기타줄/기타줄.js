const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const [[n, m], ...ropes] = inp.map((x) => x.split(" ").map(Number));
let costs = [ropes[0][0], ropes[0][1]];
for (let i in ropes) {
    costs[0] = Math.min(costs[0], ropes[i][0]);
    costs[1] = Math.min(costs[1], ropes[i][1]);
}
if (costs[1] * 6 < costs[0]) console.log(costs[1] * n);
else if (costs[0] < (n % 6) * costs[1])
    console.log(costs[0] * Math.ceil(n / 6));
else console.log(costs[0] * Math.floor(n / 6) + (n % 6) * costs[1]);
