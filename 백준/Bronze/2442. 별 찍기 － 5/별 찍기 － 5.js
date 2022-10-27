let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let ans = [];
for (let i = 0; i < n; i++)
    ans.push(" ".repeat(n - i - 1) + "*".repeat(2 * i + 1));
console.log(ans.join("\n"));
