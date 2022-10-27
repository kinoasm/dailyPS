let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
const [n, m] = arr;
let ans = 1;
for (let i = n; i > n - m; i--) ans *= i;
for (let i = 1; i <= m; i++) ans /= i;
console.log(ans);
