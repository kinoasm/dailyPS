const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let [n, ...list] = inp.map(Number);
let ans = [];
for (let i of list) {
    let now = i;
    if (now == 0) return;
    let cnt = 0;
    while (now >= 0) {
        cnt += ((now / 2) >> 0) + 1;
        now -= 3;
    }
    ans.push(cnt);
}
console.log(ans.join("\n"));
