const [n, ...list] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x.trim()));
list.sort((a, b) => a - b);
let ans = [];
ans.push(Math.round(list.reduce((a, b) => a + b, 0) / n));
ans.push(list[n >> 1]);
const map = new Map();
let max = 1;
for (let i of list)
  if (map.has(i)) {
    max = Math.max(max, map.get(i) + 1);
    map.set(i, map.get(i) + 1);
  } else map.set(i, 1);
const maxArr = [];
for (let [key, val] of map) if (val === max) maxArr.push(key);
ans.push(maxArr.length === 1 ? maxArr[0] : maxArr[1]);
ans.push(list.at(-1) - list[0]);
console.log(ans.join("\n"));
