let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const [t] = arr.slice(0, 1)[0].split(" ").map(Number);
const words = arr.slice(1);
let answer = "";
for (let i of words) {
    let x = new RegExp(/^(100+1+|01)+$/);
    answer += (i.match(x) ? "YES" : "NO") + "\n";
}
console.log(answer.trim());
