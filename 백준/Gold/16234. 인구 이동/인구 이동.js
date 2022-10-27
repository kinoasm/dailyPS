const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let [[n, l, r], ...list] = inp.map((x) => x.split(" ").map(Number));
let visit;
const isIn = ([x, y]) => x >= 0 && y >= 0 && x < n && y < n;
const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
];
const dfs = (i, j) => {
    let que = [[i, j]];
    let visited = [[i, j]];
    let sum = list[i][j];
    visit[i][j] = 1;
    while (que.length > 0) {
        let now = que.pop();
        for (let i in dir) {
            let next = [now[0] + dir[i][0], now[1] + dir[i][1]];
            if (isIn(next) && visit[next[0]][next[1]] == 0) {
                let gap = Math.abs(
                    list[now[0]][now[1]] - list[next[0]][next[1]]
                );
                if (gap >= l && gap <= r) {
                    que.push(next);
                    visited.push(next);
                    visit[next[0]][next[1]] = 1;
                    sum += list[next[0]][next[1]];
                }
            }
        }
    }
    if (visited.length == 1) return false;
    let average = Math.floor(sum / visited.length);
    for (let i of visited) {
        list[i[0]][i[1]] = average;
    }
    return true;
};
let day = 0;
while (true) {
    let cnt = 0;
    visit = [];
    for (let i = 0; i < n; i++) visit.push(Array(n).fill(0));
    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++) if (visit[i][j] == 0) if (dfs(i, j)) cnt++;
    if (cnt == 0) break;
    day++;
}
console.log(day);
