const str = require("fs").readFileSync("/dev/stdin").toString().trim();
let depth = 0;
let ans = 0;
let last = 0;
for (let i in str) {
  last = depth;
  str[i] === "(" ? depth++ : depth--;
  if (Number(i) > 0 && str[i] === ")" && str[Number(i) - 1] === "(")
    ans += last - 1;
  else if (str[i] === ")") ans += 1;
}
console.log(ans);
