const [[n, m], tree] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(" ").map(Number));
let ans = 0;
tree.sort((a, b) => a - b);
let start = 0;
let end = tree[n - 1];
while (start <= end) {
  let mid = (start + end) >> 1;
  let sum = 0;
  for (let i of tree) if (i > mid) sum += i - mid;
  if (sum >= m) {
    if (mid > ans) ans = mid;
    start = mid + 1;
  } else end = mid - 1;
}
console.log(ans);
