let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
arr = arr.slice(1).map((x) => x.split(" ").map(Number));
arr = arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
let ans = "";
for (let i of arr) ans += i[0] + " " + i[1] + "\n";
console.log(ans.trim());
