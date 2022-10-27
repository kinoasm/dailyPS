let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const [n, m] = arr.slice(0, 1)[0].split(" ").map(Number);
const list = arr.slice(1, 2)[0].split(" ").map(Number);
const query = arr.slice(2).map((x) => x.split(" ").map(Number));
let now = 0;
let sum = [0];
for (let i in list) {
    now += list[i];
    sum.push(now);
}
let ans = "";
for (let i of query) {
    ans += sum[i[1]] - sum[i[0] - 1] + "\n";
}
console.log(ans.trim());
