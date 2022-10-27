let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let n = arr.shift().trim().split(" ").map(Number)[0];
for (let i in arr) {
    let now = arr[i].trim();
    let start = now[0];
    let end = now[now.length - 1];
    console.log(start + end);
}
