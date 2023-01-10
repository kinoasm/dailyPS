const list = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(" ").map(Number));
list.pop();
let ans = [];
let sample = ["factor", "multiple", "neither"];
for (let i of list)
  ans.push(sample[(i[0] % i[1] !== 0) * 1 + (i[1] % i[0] !== 0) * 2 - 1]);
console.log(ans.join("\n"));
