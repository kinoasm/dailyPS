const [[n, m], ...list] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim())
    .map((x) => x.split(" ").map(Number));
let ans = [];
let inDegree = Array(n + 1).fill(0);
let graph = Array.from({ length: n + 1 }, () => []);
for (let i in list) {
    inDegree[list[i][1]]++;
    graph[list[i][0]].push(list[i][1]);
}
let queue = [];
for (let i = 1; i <= n; i++) if (!inDegree[i]) queue.push(i);
while (queue.length > 0) {
    let now = queue.pop();
    ans.push(now);
    graph[now].forEach((x) => {
        inDegree[x]--;
        if (!inDegree[x]) queue.push(x);
    });
}
console.log(ans.join(" "));
