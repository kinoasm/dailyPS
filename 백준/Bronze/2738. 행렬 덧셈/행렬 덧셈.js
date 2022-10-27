let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [n, m] = arr.shift().trim().split(" ").map(Number);
let arr1 = arr.slice(0, n).map((x) => x.trim().split(" ").map(Number));
let arr2 = arr.slice(n).map((x) => x.trim().split(" ").map(Number));
let arr3 = [];
for (let j = 0; j < n; j++) {
    let row = [];
    for (let i = 0; i < m; i++) {
        row.push(arr1[j][i] + arr2[j][i]);
    }
    arr3.push(row);
}
let str = arr3.map((x) => x.join(" ")).join("\n");
console.log(str);
