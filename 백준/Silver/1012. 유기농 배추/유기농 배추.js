let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [t] = arr.shift().trim().split(" ").map(Number);
let res = "";
const str = ([x, y]) => x + "," + y;
const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];
const dfs = ([x, y], arr2d) => {
    let que = [[x, y]];
    let [w, h] = [arr2d.length, arr2d[0].length];
    const isIn = ([a, b]) => a >= 0 && b >= 0 && a < w && b < h;
    let visited = [];
    while (que.length > 0) {
        let now = que.pop();
        if (visited.indexOf(str(now)) === -1) {
            visited.push(str(now));
            for (let i in dir) {
                let newNow = [now[0] + dir[i][0], now[1] + dir[i][1]];
                if (isIn(newNow) && arr2d[newNow[0]][newNow[1]] === 1) {
                    que.push(newNow);
                }
            }
        }
    }
    return visited;
};
for (let q = 0; q < t; q++) {
    let [w, h, k] = arr.shift().trim().split(" ").map(Number);
    let list = [];
    for (let i = 0; i < w; i++) list.push(Array(h).fill(0));
    for (let i = 0; i < k; i++) {
        let [x, y] = arr.shift().trim().split(" ").map(Number);
        list[x][y] = 1;
    }
    let visitedAll = [];
    let count = 0;
    for (let i in list) {
        for (let j in list[i]) {
            if (list[i][j] == 1 && visitedAll.indexOf(str([i, j])) === -1) {
                let cabbage = dfs([Number(i), Number(j)], list);
                count++;
                visitedAll = visitedAll.concat(cabbage);
            }
        }
    }
    res += count + "\n";
}
console.log(res.trim());
