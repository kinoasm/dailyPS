let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
const ans = [];
for (let i = 1; i <= n; i++)
  ans.push("*".repeat(i) + " ".repeat(2 * n - 2 * i) + "*".repeat(i));
for (let i = n - 1; i >= 1; i--)
  ans.push("*".repeat(i) + " ".repeat(2 * n - 2 * i) + "*".repeat(i));
console.log(ans.join("\n"));
