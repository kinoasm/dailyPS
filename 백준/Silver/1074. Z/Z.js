let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
let [n, r, c] = arr;
let ans = 0;
while (n > 0) {
    let k = Math.pow(2, n);
    let block = (k * k) / 4;
    if (r >= k / 2) {
        ans += block * 2;
        r -= k / 2;
    }
    if (c >= k / 2) {
        ans += block;
        c -= k / 2;
    }
    n--;
}
console.log(ans);
