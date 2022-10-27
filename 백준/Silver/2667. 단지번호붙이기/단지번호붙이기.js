let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let n = arr.shift().trim().split(" ").map(Number)[0];
arr = arr.map((x) => x.trim().split("").map(Number));

const str = ([x, y]) => x + "," + y;
const isIn = ([x, y]) => x >= 0 && y >= 0 && x < n && y < n;
const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];
const dfs = ([x, y]) => {
    let que = [[x, y]];
    let visited = [];
    while (que.length > 0) {
        let now = que.shift();
        if (visited.indexOf(str(now)) === -1) {
            visited.push(str(now));
            for (let i in dir) {
                let newNow = [now[0] + dir[i][0], now[1] + dir[i][1]];
                if (isIn(newNow) && arr[newNow[0]][newNow[1]] === 1) {
                    que.push(newNow);
                }
            }
        }
    }
    return visited;
};

let visitedAll = [];
let list = [];

for (let i in arr) {
    for (let j in arr[0]) {
        if (arr[i][j] == 1 && visitedAll.indexOf(str([i, j])) === -1) {
            let house = dfs([Number(i), Number(j)]);
            list.push(house.length);
            visitedAll = visitedAll.concat(house);
        }
    }
}

list = list.sort((a, b) => a - b);
console.log(list.length);
for (let i in list) {
    console.log(list[i]);
}
