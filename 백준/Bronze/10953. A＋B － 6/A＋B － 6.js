const [[t], ...line] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(",").map(Number));
console.log(line.map((x) => x.reduce((a, b) => a + b, 0)).join("\n"));
