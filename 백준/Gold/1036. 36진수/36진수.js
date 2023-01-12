const [head, ...list] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim());
const n = Number(head);
const k = Number(list.pop());
const check = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = Array.from({ length: 36 }, () => Array(54).fill(0));
const value = Array.from({ length: 36 }, (_, i) => [i, 0n]);
for (let i of list) {
  let str = i.split("").reverse();
  for (let j = 0; j < i.length; j++) num[check.indexOf(str[j])][j]++;
}
const total = Array(54).fill(0);
const to36 = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 36) {
      arr[i + 1] += Math.floor(arr[i] / 36);
      arr[i] -= Math.floor(arr[i] / 36) * 36;
    }
    res.push(check[arr[i]]);
  }
  while (res.at(-1) === "0") res.pop();
  if (res.length === 0) res.push("0");
  return res.reverse().join("");
};
if (k === 36) {
  for (let i = 0; i < 36; i++)
    for (let j = 0; j < 54; j++) total[j] += num[i][j] * 35;
} else {
  for (let i = 0; i < 36; i++)
    for (let j = 0; j < 54; j++)
      value[i][1] += 36n ** BigInt(j) * (35n - BigInt(i)) * BigInt(num[i][j]);
  let change = value
    .sort((a, b) => {
      if (a[1] < b[1]) return 1;
      else if (a[1] > b[1]) return -1;
      else return 0;
    })
    .slice(0, k)
    .map((x) => x[0]);
  for (let i = 0; i < 36; i++)
    for (let j = 0; j < 54; j++) {
      if (change.indexOf(i) > -1) total[j] += num[i][j] * 35;
      else total[j] += num[i][j] * i;
    }
}
console.log(to36(total));
