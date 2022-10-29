const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const [[n], ...list] = inp.map((x) => x.split(" ").map(Number));
let dp = [
    list[0].map((_, i) => {
        let now = list[0].slice();
        now[(i + 1) % 3] = Infinity;
        now[(i + 2) % 3] = Infinity;
        return now;
    }),
];
for (let i = 1; i < n; i++) {
    let last = dp.at(-1);
    let next = list[i].slice().map((_, k) => {
        let now = Array.from({ length: 3 }, () => _);
        now[0] += Math.min(last[(k + 1) % 3][0], last[(k + 2) % 3][0]);
        now[1] += Math.min(last[(k + 1) % 3][1], last[(k + 2) % 3][1]);
        now[2] += Math.min(last[(k + 1) % 3][2], last[(k + 2) % 3][2]);
        return now;
    });
    dp.push(next);
}
let min = Infinity;
let last = dp.at(-1);
for (let i in last)
    for (let j in last[i])
        if (Number(i) !== Number(j) && last[i][j] < min) min = last[i][j];
console.log(min);
