const inp = require("fs")
    .readFileSync("dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let ans = "";
inp.pop();
for (let i in inp) {
    let res = 0;
    let [l, p, v] = inp[i].split(" ").map(Number);
    res += l * Math.floor(v / p);
    v %= p;
    res += v > l ? l : v;
    ans += `Case ${Number(i) + 1}: ${res}\n`;
}
console.log(ans.trim());
