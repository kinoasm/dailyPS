let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [n] = arr.shift().trim().split(" ").map(Number);
arr = arr.map((x) => x.trim().split(" ").map(Number)[0]);
let list = [];
for (let i in arr) {
    if (arr[i] === 0) list.pop();
    else list.push(arr[i]);
}
let sum = list.reduce((a, b) => a + b, 0);
console.log(sum);
