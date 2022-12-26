const [long, sample] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim());
let stack = [];
for (let i in long) {
  stack.push(long[i]);
  if (stack.length >= sample.length) {
    let temp = stack.slice(stack.length - sample.length).join("");
    if (temp === sample) {
      let cnt = 0;
      while (cnt < sample.length) {
        stack.pop();
        cnt++;
      }
    }
  }
}
console.log(stack.length === 0 ? "FRULA" : stack.join(""));
