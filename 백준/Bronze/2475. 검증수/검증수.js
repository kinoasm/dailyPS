let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
let ans = 0;
for (let i in arr) {
    ans += arr[i] * arr[i];
}
ans = ans % 10;
console.log(ans);
