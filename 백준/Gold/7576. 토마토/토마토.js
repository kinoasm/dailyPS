let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [w, h] = arr.shift().split(" ").map(Number);
arr = arr.map((x) => x.trim().split(" ").map(Number));
let dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];
const isIn = ([x, y]) => x >= 0 && y >= 0 && x < h && y < w;
let list = [];

let visited = [];
for (let i = 0; i < h; i++) visited.push(Array(w).fill(0));
//O(w*h)
for (let i in arr) {
    for (let j in arr[0]) {
        if (arr[i][j] == 1) {
            list.push([Number(i), Number(j)]);
            visited[i][j] = 1;
        }
    }
}
let max = 0;
while (list.length > 0) {
    let newList = [];
    for (let i in list) {
        let now = list[i];
        let value = arr[now[0]][now[1]];
        if (value > max) max = value;
        for (let j in dir) {
            let [x, y] = [now[0] + dir[j][0], now[1] + dir[j][1]];
            if (isIn([x, y]) && arr[x][y] !== -1 && visited[x][y] === 0) {
                arr[x][y] = value + 1;
                newList.push([x, y]);
                visited[x][y] = 1;
            }
        }
    }
    list = newList;
}
//check zero
let isZero = false;
check: for (let i in arr) {
    for (let j in arr[i]) {
        if (arr[i][j] === 0) {
            isZero = true;
            break check;
        }
    }
}
if (isZero) console.log(-1);
else {
    console.log(max - 1);
}
