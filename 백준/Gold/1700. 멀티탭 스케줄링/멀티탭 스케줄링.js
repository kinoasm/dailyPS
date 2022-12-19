const [[n, k], list] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(" ").map(Number));
let res = 0;
let plug = Array(n).fill(0);
for (let i = 0; i < k; i++) {
  let isUsed = false;
  for (let j = 0; j < n; j++) {
    if (plug[j] === list[i]) {
      isUsed = true;
      break;
    }
  }
  if (isUsed) continue;
  for (let j = 0; j < n; j++) {
    if (!plug[j]) {
      plug[j] = list[i];
      isUsed = true;
      break;
    }
  }
  if (isUsed) continue;
  let idx = -1;
  let devIdx = -1;
  for (let j = 0; j < n; j++) {
    let last = 0;
    for (let q = i + 1; q < k; q++) {
      if (plug[j] === list[q]) break;
      last++;
    }
    if (last > devIdx) {
      idx = j;
      devIdx = last;
    }
  }
  res++;
  plug[idx] = list[i];
}
console.log(res);
