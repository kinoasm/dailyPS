let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => Number(x.trim()));
let list = Array.from({ length: 30 }, (_, i) => i + 1);
for (let i in arr) {
    list = list.filter((x) => x !== arr[i]);
}
console.log(list[0]);
console.log(list[1]);
