let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [n] = arr.shift().trim().split(" ").map(Number);
arr = arr.map((x) => Number(x.trim().split(" ")));
let res = "";
let max = 0;
for (let i in arr) max = Math.max(arr[i], max);
let list = [
    [1, 0],
    [0, 1],
];
for (let i = 2; i <= max; i++) {
    list.push([
        list[i - 2][0] + list[i - 1][0],
        list[i - 2][1] + list[i - 1][1],
    ]);
}
for (let i in arr) {
    res += list[arr[i]][0] + " " + list[arr[i]][1];
    res += "\n";
}
console.log(res.trim());
