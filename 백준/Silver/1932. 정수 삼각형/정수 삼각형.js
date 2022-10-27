let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [n] = arr.shift().split(" ").map(Number);
arr = arr.map((x) => x.trim().split(" ").map(Number));
let list = [[arr[0][0]]];
for (let i = 1; i < n; i++) {
    let now = [];
    for (let j = 0; j <= i; j++) {
        if (j == 0) now.push(list[i - 1][0] + arr[i][0]);
        else if (j == i) now.push(list[i - 1][j - 1] + arr[i][j]);
        else now.push(arr[i][j] + Math.max(list[i - 1][j - 1], list[i - 1][j]));
    }
    list.push(now);
}
let max = 0;
for (let i in list[n - 1]) max = Math.max(max, list[n - 1][i]);
console.log(max);
