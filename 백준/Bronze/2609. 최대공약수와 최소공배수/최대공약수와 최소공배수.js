let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
let [x, y] = arr;
const gcd = (x, y) => {
    if (x > y) [x, y] = [y, x];
    if (y % x == 0) return x;
    else return gcd(y % x, x);
};
console.log(gcd(x, y));
console.log((x * y) / gcd(x, y));
