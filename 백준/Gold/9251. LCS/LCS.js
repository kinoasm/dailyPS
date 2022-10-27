let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const [x, y] = arr;
let mat = [];
for (let i = 0; i <= x.length; i++) mat.push(Array(y.length + 1).fill(0));
for (let i = 1; i <= x.length; i++) {
    for (let j = 1; j <= y.length; j++) {
        if (x[i - 1] === y[j - 1]) mat[i][j] = mat[i - 1][j - 1] + 1;
        else mat[i][j] = Math.max(mat[i][j - 1], mat[i - 1][j]);
    }
}
console.log(mat[x.length][y.length]);
