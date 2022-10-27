let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let ans = "";
for (let i = 0; i < n; i++) {
    ans += "*".repeat(n - i) + "\n";
}
console.log(ans.trim());
