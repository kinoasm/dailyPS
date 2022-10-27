let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
arr.pop();
let res = "";
for (let i of arr) {
    let rev = i.split("").reverse().join("");
    res += i !== rev ? "no\n" : "yes\n";
}
console.log(res.trim());
