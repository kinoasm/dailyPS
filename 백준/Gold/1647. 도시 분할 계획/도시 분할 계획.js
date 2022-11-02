const [[n, m], ...list] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim())
    .map((x) => x.split(" ").map(Number));
let ans = 0;
list.sort((a, b) => a[2] - b[2]);
let parent = Array.from({ length: n + 1 }, (_, i) => i);
const findParent = (x) => (parent[x] === x ? x : findParent(parent[x]));
let last = 0;
for (let i in list) {
    let a = findParent(list[i][0]);
    let b = findParent(list[i][1]);
    if (a !== b) {
        ans += list[i][2];
        last = list[i][2];
        a > b ? (parent[a] = b) : (parent[b] = a);
    }
}
console.log(ans - last);
