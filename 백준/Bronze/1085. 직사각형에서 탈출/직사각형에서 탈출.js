let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
let [x, y, w, h] = arr;
console.log(Math.min(w - x, h - y, x, y));
