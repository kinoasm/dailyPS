const [n, str] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim());
const multi = [1, 31];
while (multi.length < 50) multi.push((multi.at(-1) * 31) % 1234567891);
let hash = 0;
for (let i = 0; i < str.length; i++)
  hash =
    (hash + (((str[i].charCodeAt(0) - 96) * multi[i]) % 1234567891)) %
    1234567891;
console.log(hash);
