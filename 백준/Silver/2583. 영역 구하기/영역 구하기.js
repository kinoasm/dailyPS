let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const [[n, m, k], ...list] = arr.map((x) => x.split(" ").map(Number));
let board = [];
for (let i = 0; i < n; i++) board.push(Array(m).fill(0));
for (let q of list) {
    let [a, b, c, d] = q;
    for (let i = a; i < c; i++) {
        for (let j = b; j < d; j++) {
            board[j][i] = 1;
        }
    }
}
const isIn = (x, y) => x >= 0 && y >= 0 && x < n && y < m;
const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];
let visit = [];
for (let i = 0; i < n; i++) visit.push(Array(m).fill(false));
const dfs = (x, y) => {
    let count = 1;
    let que = [[x, y]];
    visit[x][y] = true;
    while (que.length > 0) {
        let newQue = [];
        for (let q of que) {
            for (let i = 0; i < 4; i++) {
                let [a, b] = [q[0] + dir[i][0], q[1] + dir[i][1]];
                if (isIn(a, b) && board[a][b] === 0 && visit[a][b] == false) {
                    visit[a][b] = true;
                    newQue.push([a, b]);
                    count++;
                }
            }
        }
        que = newQue;
    }
    return count;
};
let size = [];
for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
        if (board[i][j] == 0 && !visit[i][j]) {
            size.push(dfs(i, j));
        }
console.log(size.length + "\n" + size.sort((a, b) => a - b).join(" "));
