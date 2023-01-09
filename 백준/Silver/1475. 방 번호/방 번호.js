let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let arr = (n + "").split("").map(Number);
let num = Array(10).fill(0);
for (let i in arr) num[arr[i]]++;
num[6] += num.at(-1);
let ans = 0;
for (let i = 0; i < 9; i++)
  ans = Math.max(i === 6 ? Math.ceil(num[i] / 2) : num[i], ans);
console.log(ans);
