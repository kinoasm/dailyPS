const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let ans = 0;
const [[h, w], list] = inp.map((x) => x.split(" ").map(Number));
let pushes = [];
let max = list[0];
let visit = Array(w).fill(false);
for (let i = 1; i < w; i++) {
    if (list[i] >= max) {
        for (let k in pushes) {
            ans += max - pushes[k][0];
            visit[pushes[k][1]] = true;
        }
        pushes = [];
        max = list[i];
    } else pushes.push([list[i], i]);
}
pushes = [];
max = list[w - 1];
for (let i = w - 2; i >= 0; i--) {
    if (visit[i] == false) {
        if (list[i] >= max) {
            for (let k in pushes) ans += max - pushes[k];
            pushes = [];
            max = list[i];
        } else pushes.push(list[i]);
    }
}
console.log(ans);
