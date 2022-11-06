const [[n, m], ...list] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim().split(" ").map(Number));
let parent = Array.from({ length: n }, (_, i) => i);
const findParent = (x) =>
    parent[x] === x ? x : (parent[x] = findParent(parent[x]));
const unionParent = (x, y) => {
    let a = findParent(x);
    let b = findParent(y);
    if (a === b) return false;
    else {
        a < b ? (parent[b] = a) : (parent[a] = b);
        return true;
    }
};
let ans = 0;
for (let i = 0; i < m; i++) {
    let now = unionParent(list[i][0], list[i][1]);
    if (!now) {
        ans = i + 1;
        break;
    }
}
console.log(ans);
