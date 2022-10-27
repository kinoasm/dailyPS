let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let [[n], ...list] = arr.map((x) => x.split(" ").map(Number));
const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];
const isIn = ([x, y]) => x >= 0 && y >= 0 && x < n && y < n;
let max = 0;
for (let k = 0; k <= 100; k++) {
    let visit = [];
    for (let i = 0; i < n; i++) visit.push(Array(n).fill(0));
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (list[i][j] > k && visit[i][j] === 0) {
                let que = [[i, j]];
                visit[i][j] = 1;
                while (que.length > 0) {
                    let now = que.pop();
                    for (let d = 0; d < 4; d++) {
                        let next = [now[0] + dir[d][0], now[1] + dir[d][1]];
                        if (
                            isIn(next) &&
                            list[next[0]][next[1]] > k &&
                            visit[next[0]][next[1]] === 0
                        ) {
                            visit[next[0]][next[1]] = 1;
                            que.push(next);
                        }
                    }
                }
                cnt++;
            }
        }
    }
    if (cnt > max) max = cnt;
}
console.log(max);
