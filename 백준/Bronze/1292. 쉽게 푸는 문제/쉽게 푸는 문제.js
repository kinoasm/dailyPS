const [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let num = [0];
for (let i = 1; i < 50; i++) for (let j = 0; j < i; j++) num.push(i);
console.log(num.slice(a, b + 1).reduce((x, y) => x + y, 0));
