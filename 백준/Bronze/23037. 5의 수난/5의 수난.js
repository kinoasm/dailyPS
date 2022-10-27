let str = require("fs").readFileSync("/dev/stdin").toString().trim();
let ans = 0;
for (let i in str) {
    let x = Number(str[i]);
    ans += x * x * x * x * x;
}
console.log(ans);
