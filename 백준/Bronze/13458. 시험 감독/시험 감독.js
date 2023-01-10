const [[n], room, [b, c]] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(" ").map(Number));
let ans = 0;
for (let i in room) {
  ans += 1;
  room[i] = Math.max(0, room[i] - b);
  ans += Math.ceil(room[i] / c);
}
console.log(ans);
