let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
for (let i = 0; i < n; i++)
  console.log(" ".repeat(n - i - 1) + "*".repeat(2 * i + 1));
for (let i = n - 2; i >= 0; i--)
  console.log(" ".repeat(n - i - 1) + "*".repeat(2 * i + 1));
