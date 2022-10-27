let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let n = Number(arr.shift().trim());
arr = arr[0].trim().split(" ").map(Number);
arr = arr.sort((a, b) => a - b);
let ans = 0;
let now = 0;
for (let i in arr) {
    now += arr[i];
    ans += now;
}
console.log(ans);
