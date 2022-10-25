const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let [n, m, s] = inp;
n = Number(n);
m = Number(m);
let list = [];
let isCount = false;
let preCount = false;
let count = 0;
let last = s[0] === "I" ? 1 : 0;
for (let i = 1; i < m; i++) {
    let now = s[i] === "I" ? 1 : 0;
    if (isCount) {
        if (last === now) {
            isCount = false;
            list.push(count);
            count = 0;
        } else if (now === 1) count++;
    } else {
        if (last !== now) {
            if (preCount === true && now === 1) {
                count = 1;
                isCount = true;
                preCount = false;
            } else if (now === 0) {
                preCount = true;
            }
        } else preCount = false;
    }
    last = now;
}
if (count > 0) list.push(count);
let ans = 0;
for (let i in list) ans += Math.max(list[i] - n + 1, 0);
console.log(ans);
