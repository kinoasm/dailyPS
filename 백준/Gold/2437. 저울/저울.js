const [[n], list] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(" ").map(Number));
list.sort((a, b) => a - b);
let min = 0;
for (let i of list) {
  if (i > min + 1) break;
  else min += i;
}
console.log(min + 1);
