const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const [[n], [m], ...lines] = inp.map((x) => x.split(" ").map(Number));
const [start, end] = lines.pop();
const distance = Array(n + 1).fill(Infinity);
const ways = [];
for (let i = 0; i <= n; i++) ways.push([]);
for (let i of lines) ways[i[0]].push([i[1], i[2]]);
for (let i of ways) i = i.sort((a, b) => a[1] - b[1]);
distance[start] = 0;
const que = [[start, 0]];
while (que.length > 0) {
    let now = que.shift();
    for (let i of ways[now[0]]) {
        if (distance[i[0]] > now[1] + i[1]) {
            distance[i[0]] = now[1] + i[1];
            que.push([i[0], distance[i[0]]]);
        }
    }
}
console.log(distance[end]);
