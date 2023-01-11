let [str, n, ...list] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim());
let left = str.split("");
let right = [];
for (let i of list) {
  if (i === "L") {
    let temp = left.pop();
    temp ? right.push(temp) : null;
  } else if (i === "D") {
    let temp = right.pop();
    temp ? left.push(temp) : null;
  } else if (i === "B") left.pop();
  else left.push(i[2]);
}
console.log(left.join("") + right.reverse().join(""));
