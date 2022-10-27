let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
const [r, c] = arr.shift().trim().split(" ").map(Number);
const diry = [1, -1, 0, 0];
const dirx = [0, 0, 1, -1];
let max = 1;
const isIn = (x, y) => x >= 0 && y >= 0 && (x < r) & (y < c);
let list = Array(26).fill(0);
list[arr[0][0].charCodeAt(0) - 65] = 1;
const dfs = (a, b, len) => {
    if (len > max) max = len;
    for (let i = 0; i < 4; i++) {
        let [x, y] = [a + dirx[i], b + diry[i]];
        if (isIn(x, y) && list[arr[x][y].charCodeAt(0) - 65] === 0) {
            list[arr[x][y].charCodeAt(0) - 65] = 1;
            dfs(x, y, len + 1);
            list[arr[x][y].charCodeAt(0) - 65] = 0;
        }
    }
};
dfs(0, 0, 1);
console.log(max);
