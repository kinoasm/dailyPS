const [[n], ...list] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(" ").map(Number));
let time = [];
list.map((x) => {
  time.push([0, x[0]]);
  time.push([1, x[1]]);
});
time.sort((a, b) => (a[1] === b[1] ? b[0] - a[0] : a[1] - b[1]));
let cnt = 0;
let ans = 0;
for (let i of time) {
  if (i[0] === 0) {
    cnt++;
    if (cnt > ans) ans = cnt;
  } else cnt--;
}
console.log(ans);
