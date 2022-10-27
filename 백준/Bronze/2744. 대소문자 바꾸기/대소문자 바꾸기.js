let str = require("fs").readFileSync("/dev/stdin").toString().trim();
let lower = "abcdefghijklmnopqrstuvwxyz".split("");
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let res = "";
for (let i in str) {
    if (lower.indexOf(str[i]) === -1) {
        res += lower[upper.indexOf(str[i])];
    } else res += upper[lower.indexOf(str[i])];
}
console.log(res);
