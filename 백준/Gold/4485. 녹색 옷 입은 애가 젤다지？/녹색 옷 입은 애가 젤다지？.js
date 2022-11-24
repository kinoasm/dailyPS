const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n")
    .map((x) => x.trim());
let q = 0;
let ans = [];
let t = 1;
const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];
while (true) {
    const n = inp.slice(q, ++q).map(Number)[0];
    if (n == 0) break;
    const map = inp.slice(q, q + n).map((x) => x.split(" ").map(Number));
    let visit = Array.from({ length: n }, () => Array(n).fill(Infinity));
    visit[0][0] = map[0][0];
    const isIn = ([x, y]) => x >= 0 && y >= 0 && x < n && y < n;
    let que = [[0, 0, map[0][0]]];
    sequence: while (que.length > 0) {
        let now = que.pop();
        for (let i in dir) {
            let next = [now[0] + dir[i][0], now[1] + dir[i][1]];
            if (isIn(next)) {
                let value = now[2] + map[next[0]][next[1]];
                if (value < visit[next[0]][next[1]]) {
                    visit[next[0]][next[1]] = now[2] + map[next[0]][next[1]];
                    if (next[0] === n - 1 && next[1] === n - 1) break sequence;
                    let k = 0;
                    while (k < que.length && value < que[k][2]) k++;
                    que.splice(k, 0, [...next, now[2] + map[next[0]][next[1]]]);
                }
            }
        }
    }
    q += n;
    ans.push(`Problem ${t}: ${visit[n - 1][n - 1]}`);
    t++;
}
console.log(ans.join("\n"));
