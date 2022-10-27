let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let ropes = arr
    .slice(1)
    .map(Number)
    .sort((a, b) => a - b);
let max = 0;
let n = ropes.length;
for (let i = 0; i < n; i++) {
    let now = (n - i) * ropes[i];
    if (now > max) max = now;
}
console.log(max);
