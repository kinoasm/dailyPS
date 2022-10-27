const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let [[n], list, [k]] = inp.map((x) => x.split(" ").map(Number));
let visit = Array(n).fill(0);
visit[k] = -1;
const find = (x, p) => {
    if (visit[x] === -1) return false;
    else if (list[x] !== -1) {
        let now = find(list[x], p);
        if (now) visit[x] += p;
        return now;
    } else {
        visit[x] += p;
        return true;
    }
};
for (let i in list) find(Number(i), 1);
console.log(visit.reduce((a, b) => a + 1 * (b === 1), 0));
