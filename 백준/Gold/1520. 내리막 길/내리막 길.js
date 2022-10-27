const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let [[n, m], ...list] = inp.map((x) => x.split(" ").map(Number));
let que = [[0, 0, list[0][0]]];
const isIn = ([x, y]) => x >= 0 && y >= 0 && x < n && y < m;
const dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
];
let count = [];
let visit = [];
for (let i = 0; i < n; i++) {
    count.push(Array(m).fill(0));
    visit.push(Array(m).fill(false));
}
count[0][0] = 1;
while (que.length > 0) {
    let now = que.pop();
    if (!visit[now[0]][now[1]]) {
        for (let i in dir) {
            let next = [now[0] + dir[i][0], now[1] + dir[i][1]];
            if (isIn(next) && now[2] > list[next[0]][next[1]]) {
                let value = list[next[0]][next[1]];
                let low = 0;
                let high = que.length;
                while (low < high) {
                    let mid = (low + high) >>> 1;
                    if (que[mid][2] < value) low = mid + 1;
                    else high = mid;
                }
                que.splice((low + high) >>> 1, 0, [...next, value]);
                count[next[0]][next[1]] += count[now[0]][now[1]];
            }
        }
        visit[now[0]][now[1]] = true;
    }
}
console.log(count[n - 1][m - 1]);
