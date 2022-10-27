let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
let [n, k] = arr;
let visit = Array(100001).fill(false);
let que = [[n, 0]];
let newQue = [];
visit[n] = true;
if (n == k) console.log(0);
else {
    while (true) {
        let [x, y] = que.shift();
        if (x * 2 < visit.length && !visit[x * 2]) {
            que.unshift([x * 2, y]);
            visit[x * 2] = true;
        }
        if (x + 1 < visit.length && !visit[x + 1]) {
            que.push([x + 1, y + 1]);
            visit[x + 1] = true;
        }
        if (x - 1 >= 0 && !visit[x - 1]) {
            que.push([x - 1, y + 1]);
            visit[x - 1] = true;
        }
        if (visit[k]) {
            k == x * 2 ? console.log(y) : console.log(y + 1);
            break;
        }
    }
}
