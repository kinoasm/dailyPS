const [[n, k], ...list] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(" ").map(Number));
let que = [null];
const push = (value) => {
  que.push(value);
  let cur = que.length - 1;
  let par = cur >> 1;
  while (cur > 1 && que[par] < que[cur]) {
    [que[cur], que[par]] = [que[par], que[cur]];
    cur = par;
    par = cur >> 1;
  }
};
const pop = () => {
  const min = que[1];
  if (que.length <= 2) que = [null];
  else que[1] = que.pop();
  let cur = 1;
  let left = cur * 2;
  let right = left + 1;
  if (left >= que.length) return min;
  if (right >= que.length) {
    if (que[left] > que[cur]) [que[left], que[cur]] = [que[cur], que[left]];
    return min;
  }
  while (que[left] > que[cur] || que[right] > que[cur]) {
    const minIdx = que[left] < que[right] ? right : left;
    [que[minIdx], que[cur]] = [que[cur], que[minIdx]];
    cur = minIdx;
    left = cur * 2;
    right = left + 1;
  }
  return min;
};
const jewels = list.slice(0, n);
const bags = list.slice(n).map((x) => x[0]);
jewels.sort((a, b) => a[0] - b[0]);
bags.sort((a, b) => a - b);
let idx = 0;
let ans = 0n;
for (let i in bags) {
  while (idx < jewels.length && jewels[idx][0] <= bags[i]) {
    push(jewels[idx][1]);
    idx++;
  }
  let plus = pop();
  plus === undefined ? null : (ans += BigInt(plus));
}
console.log(ans.toString());
