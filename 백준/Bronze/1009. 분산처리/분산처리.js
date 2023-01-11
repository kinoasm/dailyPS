const [[n], ...list] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(" ").map(Number));
const ans = [];
const rem = [
  [10],
  [1],
  [2, 4, 8, 6],
  [3, 9, 7, 1],
  [4, 6],
  [5],
  [6],
  [7, 9, 3, 1],
  [8, 4, 2, 6],
  [9, 1],
];
for (let i of list) {
  let x = i[0] % 10;
  let y = (i[1] - 1) % rem[x].length;
  ans.push(rem[x][y]);
}
console.log(ans.join("\n"));
