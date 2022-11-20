const [[n], [m], ...list] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim().split(" ").map(Number));
let ans = 0;

let parent = Array.from({ length: n + 1 }, (_, i) => i);
const findParent = (x) =>
    parent[x] === x ? x : (parent[x] = findParent(parent[x]));
const unionParent = (x, y) => {
    let a = findParent(x);
    let b = findParent(y);
    if (a === b) return false;
    if (a < b) parent[b] = a;
    else parent[a] = b;
    return true;
};
list.sort((a, b) => a[2] - b[2]);
for (let i of list) if (unionParent(i[0], i[1])) ans += i[2];
console.log(ans);
