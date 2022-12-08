const [[n], list] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(" ").map(Number));
let lis = [list[0]];
for (let i = 1; i < n; i++) {
  if (list[i] > lis.at(-1)) lis.push(list[i]);
  else if (lis[0] > list[i]) lis[0] = list[i];
  else {
    let [start, end] = [0, lis.length - 1];
    let res = lis.length - 1;
    while (start <= end) {
      let mid = (start + end) >>> 1;
      if (lis[mid] < list[i]) {
        start = mid + 1;
        continue;
      }
      res = Math.min(res, mid);
      end = mid - 1;
    }
    lis[res] = list[i];
  }
}
console.log(lis.length);
