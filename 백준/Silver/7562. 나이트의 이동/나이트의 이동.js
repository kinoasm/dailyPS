const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const [[n], ...list] = inp.map((x) => x.split(" ").map(Number));
const ans = [];
const dir = [
    [1, 2],
    [2, 1],
    [-1, 2],
    [-2, 1],
    [1, -2],
    [2, -1],
    [-1, -2],
    [-2, -1],
];
for (let q = 0; q < n; q++) {
    const l = list[3 * q][0];
    const start = list[3 * q + 1];
    const end = list[3 * q + 2];
    if (start.join(",") == end.join(",")) ans.push(0);
    else {
        let visit = [];
        for (let i = 0; i < l; i++) visit.push(Array(l).fill(0));
        let que = [start];
        const isIn = ([x, y]) => x >= 0 && y >= 0 && x < l && y < l;
        let count = 1;
        visit[start[0]][start[1]] = 1;
        seq: while (true) {
            let newQue = [];
            for (let i in que) {
                for (let j in dir) {
                    let next = [que[i][0] + dir[j][0], que[i][1] + dir[j][1]];
                    if (isIn(next) && visit[next[0]][next[1]] == 0) {
                        if (next.join(",") == end.join(",")) break seq;
                        visit[next[0]][next[1]] = 1;
                        newQue.push(next);
                    }
                }
            }
            que = newQue;
            count++;
        }
        ans.push(count);
    }
}
console.log(ans.join("\n"));
