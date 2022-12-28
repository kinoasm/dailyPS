let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let ans = [];
for (let i = 0; i < n; i++)
  ans.push(" ".repeat(i) + "*".repeat(2 * n - 1 - 2 * i));
for (let i = n - 2; i >= 0; i--)
  ans.push(" ".repeat(i) + "*".repeat(2 * n - 1 - 2 * i));
console.log(ans.join("\n"));
