let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [n, k] = arr.shift().trim().split(" ").map(Number);
let res = 0;
arr = arr.map((x) => Number(x.trim()));
do {
    arr = arr.filter((x) => x <= k);
    let x = Math.floor(k / arr[arr.length - 1]);
    res += x;
    k -= x * arr[arr.length - 1];
} while (k > 0);
console.log(res);
