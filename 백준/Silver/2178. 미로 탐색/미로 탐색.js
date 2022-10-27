let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [w, h] = arr.shift().trim().split(" ").map(Number);
arr = arr.map((x) => x.trim().split("").map(Number));

let que = [[0, 0]];
let visited = [];
let dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];
const str = ([x, y]) => x + "," + y;
const isIn = ([x, y]) => x >= 0 && y >= 0 && x < w && y < h;
while (que.length > 0) {
    let now = que.shift();
    let val = arr[now[0]][now[1]];
    if (visited.indexOf(str(now)) === -1) {
        visited.push(str(now));
        for (let i in dir) {
            let newNow = [now[0] + dir[i][0], now[1] + dir[i][1]];
            if (isIn(newNow) && arr[newNow[0]][newNow[1]] !== 0) {
                que.push(newNow);
                arr[newNow[0]][newNow[1]] =
                    arr[newNow[0]][newNow[1]] == 1
                        ? val + 1
                        : Math.min(val + 1, arr[newNow[0]][newNow[1]]);
            }
        }
    }
}
console.log(arr[w - 1][h - 1]);
