const [n, list] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(" ").map(Number));
let a = list.map((val, idx) => [val, idx]).sort((a, b) => a[0] - b[0]);
let last = a[0][0];
let idx = 0;
let b = [];
for (let i in a) {
  if (a[i][0] === last) b.push([a[i][1], idx]);
  else {
    [last, idx] = [a[i][0], idx + 1];
    b.push([a[i][1], idx]);
  }
}
console.log(
  b
    .sort((a, b) => a[0] - b[0])
    .map((x) => x[1])
    .join(" ")
);
