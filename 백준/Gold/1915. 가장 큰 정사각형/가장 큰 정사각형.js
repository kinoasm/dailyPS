let [str, ...list] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim());
list = list.map((x) => x.split("").map(Number));
const [n, m] = str.split(" ").map(Number);
let ans = 0;
for (let i = 0; i < n; i++)
  for (let j = 0; j < m; j++) {
    if (i == 0) ans = Math.max(ans, list[i][j]);
    else if (j == 0) ans = Math.max(ans, list[i][j]);
    else if (list[i][j] > 0) {
      let min = Math.min(list[i - 1][j - 1], list[i][j - 1], list[i - 1][j]);
      list[i][j] = min + 1;
      if (ans < list[i][j]) ans = list[i][j];
    }
  }
console.log(ans * ans);
