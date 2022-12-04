const [[n, l], ...list] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(" ").map(Number));
let ans = 0;

for (let i = 0; i < n; i++) {
  let isOkay = true;
  let last = list[i][0];
  let cnt = 0;
  for (let j = 0; j < n; j++) {
    if (last === list[i][j]) cnt--;
    else if (list[i][j] - 1 === last && cnt <= -l) cnt = -1;
    else if (list[i][j] + 1 === last && cnt <= 0) cnt = l - 1;
    else {
      isOkay = false;
      break;
    }
    last = list[i][j];
  }
  if (isOkay && cnt <= 0) {
    ans++;
  }
  isOkay = true;
  last = list[0][i];
  cnt = 0;
  for (let j = 0; j < n; j++) {
    if (last === list[j][i]) cnt--;
    else if (list[j][i] - 1 === last && cnt <= -l) cnt = -1;
    else if (list[j][i] + 1 === last && cnt <= 0) cnt = l - 1;
    else {
      isOkay = false;
      break;
    }
    last = list[j][i];
  }
  if (isOkay && cnt <= 0) {
    ans++;
  }
}

console.log(ans);
