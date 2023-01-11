const list = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(" ").map(Number));
let max = 0;
let now = 0;
for (let i of list) {
  now += i[1] - i[0];
  max = Math.max(now, max);
}
console.log(max);
