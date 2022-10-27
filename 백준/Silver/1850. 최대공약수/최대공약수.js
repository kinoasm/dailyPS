const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");
let [a, b] = inp.map(BigInt);
if (a < b) [a, b] = [b, a];
const gcd = (a, b) => (a % b == 0 ? b : gcd(b, a % b));
let now = gcd(a, b);
console.log("1".repeat(Number(now)));
