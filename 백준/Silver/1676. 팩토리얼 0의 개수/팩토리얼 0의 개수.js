let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let ans = 0;
while (n > 0) {
    if (n >= 5) {
        n /= 5;
        ans += Math.floor(n);
    } else break;
}
console.log(ans);
