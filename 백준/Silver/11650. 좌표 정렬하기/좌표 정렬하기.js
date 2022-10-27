let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [n] = arr.shift().split(" ").map(Number);
arr = arr.map((x) => x.trim().split(" ").map(Number));
arr = arr.sort((a, b) => {
    if (a[0] == b[0]) return a[1] - b[1];
    else return a[0] - b[0];
});
let res = "";
for (let i in arr) res += arr[i].join(" ") + "\n";
console.log(res.trim());
