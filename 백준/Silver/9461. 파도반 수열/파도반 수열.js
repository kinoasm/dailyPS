let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [t] = arr.shift().trim().split(" ").map(Number);
arr = arr.map((x) => Number(x.trim()));
let max = arr[0];
for (let i in arr) max = Math.max(max, arr[i]);
let list = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];
for (let i = 11; i <= max; i++) {
    list.push(list[i - 1] + list[i - 5]);
}
let res = "";
for (let i in arr) res += list[arr[i]] + "\n";
console.log(res.trim());
