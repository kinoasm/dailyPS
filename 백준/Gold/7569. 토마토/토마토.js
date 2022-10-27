let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [n, m, h] = arr.shift().split(" ").map(Number);
arr = arr.map((x) => x.trim().split(" ").map(Number));
let k = 0;
let tomato = [];
let visited = [];
for (let i = 0; i < h; i++) {
    tomato.push(arr.slice(k, k + m));
    let temp = [];
    for (let j = 0; j < m; j++) temp.push(Array(n).fill(0));
    visited.push(temp);
    k += m;
}

//
const dirX = [1, -1, 0, 0, 0, 0];
const dirY = [0, 0, 1, -1, 0, 0];
const dirZ = [0, 0, 0, 0, 1, -1];
const isIn = ([x, y, z]) =>
    x >= 0 && y >= 0 && x < h && y < m && z >= 0 && z < n;

let list = [];
for (let i in tomato) {
    for (let j in tomato[0]) {
        for (let k in tomato[0][0]) {
            if (tomato[i][j][k] == 1) {
                list.push([Number(i), Number(j), Number(k)]);
                visited[i][j][k] = 1;
            }
        }
    }
}

let max = 0;
while (list.length > 0) {
    let newList = [];
    for (let i in list) {
        let now = list[i];
        let value = tomato[now[0]][now[1]][now[2]];
        if (value > max) max = value;
        for (let j in dirX) {
            let [x, y, z] = [
                now[0] + dirX[j],
                now[1] + dirY[j],
                now[2] + dirZ[j],
            ];
            if (
                isIn([x, y, z]) &&
                tomato[x][y][z] !== -1 &&
                visited[x][y][z] === 0
            ) {
                tomato[x][y][z] = value + 1;
                newList.push([x, y, z]);
                visited[x][y][z] = 1;
            }
        }
    }
    list = newList;
}
// for (let i in tomato) console.log(tomato[i]);
//check zero
let isZero = false;
check: for (let i in tomato) {
    for (let j in tomato[i]) {
        for (let k in tomato[i][j]) {
            if (tomato[i][j][k] === 0) {
                isZero = true;
                break check;
            }
        }
    }
}
if (isZero) console.log(-1);
else {
    console.log(max - 1);
}
