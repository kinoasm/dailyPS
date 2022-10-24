const inp = require("fs")
    .readFileSync("/dev/stdin","utf-8")
    .trim()
    .split("\n")
    .map((x) => x.trim());
const [[n], ...jump] = inp.map((x) => x.split(" ").map(Number));
let visit = [];
for (let i = 0; i < n; i++) visit.push(Array(n).fill(0n));
visit[0][0] = 1n;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (visit[i][j] > 0 && jump[i][j] > 0) {
            if (jump[i][j] + j < n) visit[i][j + jump[i][j]] += visit[i][j];
            if (jump[i][j] + i < n) visit[i + jump[i][j]][j] += visit[i][j];
        }
    }
}
console.log(visit[n - 1][n - 1].toString());
