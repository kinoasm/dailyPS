let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let n = arr.shift();
for (let i in arr) {
    let now = arr[i].trim().split(" ").map(Number);
    let h = now[2] % now[0];
    if (h == 0) h = now[0];
    let w = Math.floor((now[2] - 1) / now[0]) + 1;
    console.log(100 * h + w);
}
