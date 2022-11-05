const [nm, ...list] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const [n, m] = nm.split(" ").map(Number);
const dir = "DRLU".split("");
const d = [
    [1, 0],
    [0, 1],
    [0, -1],
    [-1, 0],
];
let parent = [];
for (let i = 0; i < n; i++) {
    parent.push(Array.from({ length: m }, (_, j) => [i, j]));
}
const same = (a, b) => a[0] == b[0] && a[1] == b[1];
const findParent = (x) => {
    let p = parent[x[0]][x[1]];
    if (same(p, x)) return x;
    else return (parent[x] = findParent(p));
};
const unionParent = (a, b) => {
    let pa = findParent(a);
    let pb = findParent(b);
    if (same(pa, pb)) return false;
    else {
        let rev = false;
        if ((pa[0] === pb[0] && pa[1] > pb[1]) || pa[0] > pb[0]) rev = true;
        if (rev) parent[pa[0]][pa[1]] = [pb[0], pb[1]];
        else parent[pb[0]][pb[1]] = [pa[0], pa[1]];
        return true;
    }
};
let cycles = 0;
let visit = [];
for (let i = 0; i < n; i++) visit.push(Array(m).fill(false));
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (visit[i][j] === false) {
            let now = [i, j];
            while (true) {
                visit[now[0]][now[1]] = true;
                let x = dir.indexOf(list[now[0]][now[1]]);
                let next = [now[0] + d[x][0], now[1] + d[x][1]];
                let merge = unionParent(now, next);
                if (visit[next[0]][next[1]]) {
                    if (!merge) cycles++;
                    break;
                } else now = next;
            }
        }
    }
}

console.log(cycles);
