let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [r, c, t] = arr.shift().trim().split(" ").map(Number);
arr = arr.map((x) => x.trim().split(" ").map(Number));
let time = 0;
const isIn = (x, y) => x >= 0 && x < r && y >= 0 && y < c;
let circulator = [];
for (let i = 0; i < r; i++) if (arr[i][0] == -1) circulator.push(i);
const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];
const toStr = (arr) => arr.map((x) => x.join("   ")).join("\n");
const diffusion = (arr) => {
    let newArr = [];
    for (let i = 0; i < r; i++) newArr.push(Array(c).fill(0));
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (arr[i][j] !== -1) {
                let now = arr[i][j];
                let out = Math.floor(now / 5);
                for (let k = 0; k < 4; k++) {
                    let [x, y] = [i + dir[k][0], j + dir[k][1]];
                    if (isIn(x, y) && arr[x][y] !== -1) {
                        newArr[x][y] += out;
                        now -= out;
                    }
                }
                newArr[i][j] += now;
            } else newArr[i][j] = -1;
        }
    }
    return newArr;
};
const spin = (arr) => {
    let newArr = [];
    for (let i = 0; i < r; i++) {
        let row = [];
        for (let j = 0; j < c; j++) {
            if (i === 0 || i === r - 1) {
                if (j !== c - 1) row.push(arr[i][j + 1]);
                else if (i === 0) row.push(arr[1][c - 1]);
                else row.push(arr[r - 2][c - 1]);
            } else if (circulator.indexOf(i) > -1) {
                if (j === 0) row.push(-1);
                else if (j === 1) row.push(0);
                else row.push(arr[i][j - 1]);
            } else if (i < circulator[0]) {
                if (j === 0) row.push(arr[i - 1][j]);
                else if (j === c - 1) row.push(arr[i + 1][j]);
                else row.push(arr[i][j]);
            } else {
                if (j === 0) row.push(arr[i + 1][j]);
                else if (j === c - 1) row.push(arr[i - 1][j]);
                else row.push(arr[i][j]);
            }
        }
        newArr.push(row);
    }
    return newArr;
};
const count = (arr) => {
    let sum = 0;
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (arr[i][j] !== -1) sum += arr[i][j];
        }
    }
    return sum;
};
while (time < t) {
    arr = diffusion(arr);
    arr = spin(arr);
    time++;
}
console.log(count(arr));
