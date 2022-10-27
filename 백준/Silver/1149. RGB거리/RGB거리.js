let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [n] = arr.shift().split(" ").map(Number);
arr = arr.map((x) => x.trim().split(" ").map(Number));
let list = [];
list.push(arr[0]);
for (let i = 1; i < n; i++) {
    let last = list[list.length - 1];
    let x = Math.min(last[1], last[2]) + arr[i][0];
    let y = Math.min(last[0], last[2]) + arr[i][1];
    let z = Math.min(last[0], last[1]) + arr[i][2];
    list.push([x, y, z]);
}
console.log(Math.min.apply(Math, list[list.length - 1]));
