let inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let [[n, m, x], ...lines] = inp.map((x) => x.split(" ").map(Number));
const times = (rev) => {
    let ways = [];
    for (let i = 0; i < n; i++) ways.push([]);
    for (let i of lines)
        rev
            ? ways[i[0] - 1].push([i[1] - 1, i[2]])
            : ways[i[1] - 1].push([i[0] - 1, i[2]]);
    let distance = Array(n).fill(Infinity);
    distance[x - 1] = 0;
    let que = [[x - 1, 0]];
    while (que.length > 0) {
        let [idx, value] = que.shift();
        for (let i of ways[idx]) {
            if (distance[i[0]] > value + i[1]) {
                distance[i[0]] = value + i[1];
                que.push([i[0], distance[i[0]]]);
            }
        }
    }
    return distance;
};
let res = [times(true), times(false)];
let max = 0;
for (let i in res[0])
    if (res[0][i] + res[1][i] > max) max = res[0][i] + res[1][i];
console.log(max);
