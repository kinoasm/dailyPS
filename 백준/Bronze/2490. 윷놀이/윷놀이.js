const list = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(" ").map(Number));
const ans = [];
const yut = "EABCD";
for (let i of list) ans.push(yut[4 - i.reduce((a, b) => a + b, 0)]);
console.log(ans.join("\n"));
