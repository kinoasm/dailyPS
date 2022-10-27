const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n")
    .map((x) => x.trim());
let [[n, m], ...maps] = inp.map((x) => x.split(" ").map(Number));
const isIn = ([x, y]) => x >= 0 && y >= 0 && x < n && y < m;
const dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
];
const melt = () => {
    let newMap = [];
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < m; j++) {
            let cnt = 0;
            for (let k = 0; k < 4; k++) {
                let now = [i + dir[k][0], j + dir[k][1]];
                if (isIn(now) && maps[now[0]][now[1]] == 0) cnt++;
            }
            row.push(Math.max(0, maps[i][j] - cnt));
        }
        newMap.push(row);
    }
    return newMap;
};
const count = () => {
    let cnt = 0;
    let visit = [];
    for (let i = 0; i < n; i++) visit.push(Array(m).fill(false));
    for (let i = 1; i < n - 1; i++) {
        for (let j = 1; j < m - 1; j++) {
            if (maps[i][j] > 0 && !visit[i][j]) {
                cnt++;
                let que = [[i, j]];
                visit[i][j] = true;
                while (que.length > 0) {
                    let now = que.pop();
                    for (let k = 0; k < 4; k++) {
                        let next = [now[0] + dir[k][0], now[1] + dir[k][1]];
                        if (
                            isIn(next) &&
                            !visit[next[0]][next[1]] &&
                            maps[next[0]][next[1]] > 0
                        ) {
                            que.push(next);
                            visit[next[0]][next[1]] = true;
                        }
                    }
                }
            }
        }
    }
    return cnt;
};
let ans = 0;
while (true) {
    let check = count();
    if (check == 1) {
        maps = melt();
        ans++;
    } else {
        if (check == 0) ans = 0;
        break;
    }
}
console.log(ans);
