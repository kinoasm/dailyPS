const [n, ...list] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(" ").map(Number));
let ans = Infinity;
const count = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = i + 1; j < arr.length; j++)
      sum += list[arr[i]][arr[j]] + list[arr[j]][arr[i]];
  return sum;
};
const num = Array.from({ length: n }, (_, i) => i);
const pickHalf = (pick, left) => {
  if (pick.length === n / 2) {
    let out = num.filter((k) => !pick.includes(k));
    ans = Math.min(ans, Math.abs(count(pick) - count(out)));
  } else
    left.forEach((val, idx, arr) =>
      pickHalf([...pick, val], arr.slice(idx + 1))
    );
};
pickHalf([], num);
console.log(ans);
