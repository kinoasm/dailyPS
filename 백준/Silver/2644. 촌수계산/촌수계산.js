const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let [[n], [x, y], m, ...list] = inp.map((x) => x.split(" ").map(Number));
let fam = Array.from({ length: n + 1 }, (_, i) => [i, undefined]);
for (let i of list) {
    fam[i[0]].push(i[1]);
    fam[i[1]][1] = i[0];
}
let visit = Array(n + 1).fill(false);
let que = [x];
visit[x] = true;
let count = 1;
seq: while (que.length > 0) {
    let newQue = [];
    for (let i in que) {
        let now = fam[que[i]];
        for (let j = 1; j < now.length; j++) {
            if (now[j] && !visit[now[j]]) {
                visit[now[j]] = true;
                if (now[j] == y) break seq;
                else newQue.push(now[j]);
            }
        }
    }
    que = newQue;
    count++;
}
if (x == y) console.log(0);
else if (visit[y] == false) console.log(-1);
else console.log(count);
