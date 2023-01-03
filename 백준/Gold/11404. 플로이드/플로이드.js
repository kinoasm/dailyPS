const [[n], [m], ...list] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(" ").map(Number));
const ans = Array.from({ length: n }, () => Array(n).fill(Infinity));
for (let i = 0; i < n; i++) ans[i][i] = 0;
for (let i of list)
  ans[i[0] - 1][i[1] - 1] = Math.min(ans[i[0] - 1][i[1] - 1], i[2]);
for (let i = 0; i < n; i++)
  for (let j = 0; j < n; j++)
    for (let k = 0; k < n; k++)
      ans[j][k] = Math.min(ans[j][k], ans[j][i] + ans[i][k]);
console.log(
  ans.map((x) => x.map((y) => (y === Infinity ? 0 : y)).join(" ")).join("\n")
);
