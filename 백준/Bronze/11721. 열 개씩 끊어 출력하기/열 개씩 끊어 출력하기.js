let str = require("fs").readFileSync("/dev/stdin").toString().trim();
let n = str.length;
let ans = "";
for (var i = 0; i * 10 < n; i++) {
    ans += str.slice(10 * i, 10 * (i + 1)) + "\n";
}
ans += str.slice(10 * i);
console.log(ans.trim());
