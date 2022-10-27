let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const n = Number(arr.shift());
let visit = [];
for (let i = 0; i < n; i++) visit.push(Array(n).fill(0));
const isIn = ([x, y]) => x >= 0 && y >= 0 && x < n && y < n;
const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];
const dfs = (x, y, isBlind) => {
    let que = [[x, y]];
    let check = arr[x][y];
    visit[x][y] = 1;
    let other;
    if (isBlind) {
        if (check === "R") other = "G";
        else if (check === "G") other = "R";
    }
    while (que.length > 0) {
        let now = que.pop();
        for (let i in dir) {
            let next = [dir[i][0] + now[0], dir[i][1] + now[1]];
            if (
                isIn(next) &&
                visit[next[0]][next[1]] == 0 &&
                (arr[next[0]][next[1]] == check ||
                    (isBlind && arr[next[0]][next[1]] == other))
            ) {
                visit[next[0]][next[1]] = 1;
                que.push(next);
            }
        }
    }
};
let notBlind = 0;
let blind = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (visit[i][j] == 0) {
            dfs(i, j, false);
            notBlind++;
        }
    }
}
visit = [];
for (let i = 0; i < n; i++) visit.push(Array(n).fill(0));
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (visit[i][j] == 0) {
            dfs(i, j, true);
            blind++;
        }
    }
}
console.log(notBlind + " " + blind);
