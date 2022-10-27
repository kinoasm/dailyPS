const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let num = inp.slice(1).map(Number);
let ans = [];
let max = Math.max(...num);
let dp = [
    [0, 0, 0],
    [1, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
];
while (dp.length <= max) {
    let now = [
        dp.at(-1)[1] + dp.at(-1)[2],
        dp.at(-2)[0] + dp.at(-2)[2],
        dp.at(-3)[0] + dp.at(-3)[1],
    ];
    dp.push(now.map((x) => x % 1000000009));
}
for (let i of num) ans.push(dp[i].reduce((a, b) => a + b, 0) % 1000000009);
console.log(ans.join("\n"));
