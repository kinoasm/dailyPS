let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
let a = Number(arr.shift());
let mat = [];
mat.push(Array.from({ length: 14 }, (_, i) => i + 1));
for (let i = 1; i <= 14; i++) {
    let row = [];
    let sample = mat[mat.length - 1];
    let sum = 0;
    for (let j = 0; j < 14; j++) {
        sum += sample[j];
        row.push(sum);
    }
    mat.push(row);
}
for (let i = 0; i < a; i++) {
    let [k, n] = [arr[2 * i], arr[2 * i + 1]];
    console.log(mat[k][n - 1]);
}
