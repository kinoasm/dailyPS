const [[n], sample, [m], comp] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(" ").map(Number));
let list = new Map();
for (let i in sample) list.set(sample[i], 1);
let ans = [];
for (let i in comp) ans.push(list.has(comp[i]) ? 1 : 0);
console.log(ans.join(" "));
