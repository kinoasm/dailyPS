const [a, b, c] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(" ").map(Number));
console.log((a[0] ^ b[0] ^ c[0]) + " " + (a[1] ^ b[1] ^ c[1]));
