const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let [[n, m], ...list] = inp.map((x) => x.split(" ").map(Number));
let visit = [];
for (let i = 0; i < n; i++) visit.push(Array(m).fill(0));
const isIn = ([x, y]) => x >= 0 && y >= 0 && x < n && y < m;
const dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
];
const dfs = (i, j) => {
    let que = [[i, j]];
    visit[i][j] = 1;
    let count = 1;
    while (que.length > 0) {
        let now = que.pop();
        for (let i in dir) {
            let next = [now[0] + dir[i][0], now[1] + dir[i][1]];
            if (
                isIn(next) &&
                list[next[0]][next[1]] == 1 &&
                visit[next[0]][next[1]] == 0
            ) {
                visit[next[0]][next[1]] = 1;
                que.push(next);
                count++;
            }
        }
    }
    return count;
};
let cnt = 0;
let max = 0;
for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
        if (list[i][j] == 1 && visit[i][j] == 0) {
            let now = dfs(i, j);
            if (now > max) max = now;
            cnt++;
        }
console.log(cnt + "\n" + max);
