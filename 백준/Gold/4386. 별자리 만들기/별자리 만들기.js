const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const [[n], ...list] = inp.map((x) => x.split(" ").map(Number));
let ans = 0;
let distance = [];
let parent = Array.from({ length: n }, (_, i) => i);
const findParent = (x) => (parent[x] !== x ? findParent(parent[x]) : x);
for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
        if (i !== j) {
            let x = list[i][0] - list[j][0];
            let y = list[i][1] - list[j][1];
            let dist = Number(Math.sqrt(x * x + y * y).toFixed(2));
            distance.push([i, j, dist]);
        }
    }
}
distance.sort((a, b) => a[2] - b[2]);
for (let i of distance) {
    let a = findParent(i[0]);
    let b = findParent(i[1]);
    if (a !== b) {
        ans += i[2];
        if (a < b) parent[b] = a;
        else parent[a] = b;
    }
}
console.log(ans);
