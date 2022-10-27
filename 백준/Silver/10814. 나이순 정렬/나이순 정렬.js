let arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [n] = arr.shift().trim().split(" ").map(Number);
arr = arr.map((x, i) => [...x.trim().split(" "), i]);
arr = arr.sort((a, b) =>
    a[0] == b[0] ? a[2] - b[2] : Number(a[0]) - Number(b[0])
);
let ans = "";
for (let i of arr) ans += i[0] + " " + i[1] + "\n";
console.log(ans.trim());
