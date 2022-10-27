let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const [n] = arr.slice(0, 1)[0].split(" ").map(Number);
const list = arr.slice(1).map((x) => x.split(" ").map(Number))[0];
let max = list[0];
for (let i = 1; i < n; i++) {
    if (list[i - 1] > 0 && list[i] + list[i - 1] > 0) list[i] += list[i - 1];
    if (max < list[i]) max = list[i];
}
console.log(max);
