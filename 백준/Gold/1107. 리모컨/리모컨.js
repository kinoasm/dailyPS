const [[n], [m], num] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(" ").map(Number));
let ans = 5000006;
let okay = Array.from({ length: 10 }, (_, i) => i);
if (num) okay = okay.filter((x) => !num.includes(x));
ans = Math.min(ans, Math.abs(n - 100));
let l = (n + "").length;
const pick = (picked, len) => {
  if (picked.length === len)
    ans = Math.min(ans, len + Math.abs(n - Number(picked)));
  else okay.forEach((val) => pick(picked + val, len));
};
pick("", l);
if (l > 1) pick("", l - 1);
if (l < 6) pick("", l + 1);
console.log(ans);
