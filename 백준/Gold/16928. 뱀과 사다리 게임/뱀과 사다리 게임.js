let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let jumps = arr.slice(1).map((x) => x.split(" ").map(Number));
let starts = jumps.map((x) => x[0]);
let visit = Array(100).fill(0);
let que = [1];
while (visit[99] === 0) {
    let newQue = [];
    let count = visit[que[0] - 1];
    for (let q of que) {
        for (let i = 1; i <= 6; i++) {
            let now = q + i;
            let idx = starts.indexOf(now);
            if (idx === -1) {
                if (visit[now - 1] === 0) {
                    visit[now - 1] = count + 1;
                    newQue.push(now);
                }
            } else if (visit[jumps[idx][1] - 1] === 0) {
                visit[jumps[idx][1] - 1] = count + 1;
                newQue.push(jumps[idx][1]);
            }
        }
    }
    que = newQue;
}
console.log(visit[99]);
