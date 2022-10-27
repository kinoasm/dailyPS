const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n")
    .map((x) => x.trim());
const [[n, m], ...map] = inp.map((x) => x.split(" ").map(Number));
let max = 0;
let zero = [];
let poisons = [];
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (map[i][j] == 0) zero.push([i, j]);
        else if (map[i][j] == 2) poisons.push([i, j]);
    }
}
let cases = [];
const points = (pick, left) => {
    if (pick.length == 3) cases.push(pick);
    else {
        left.forEach((value, index, array) =>
            points([...pick, value], array.slice(index + 1))
        );
    }
};
points([], zero);
const isIn = ([x, y]) => x >= 0 && y >= 0 && x < n && y < m;
const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];
const spread = () => {
    let que = poisons.slice();
    let instance = map
        .join("\n")
        .split("\n")
        .map((x) => x.split(",").map(Number));
    while (que.length > 0) {
        let now = que.pop();
        for (let i = 0; i < 4; i++) {
            let next = [now[0] + dir[i][0], now[1] + dir[i][1]];
            if (isIn(next) && instance[next[0]][next[1]] == 0) {
                instance[next[0]][next[1]] = 2;
                que.push(next);
            }
        }
    }
    let count = 0;
    for (let i = 0; i < n; i++)
        for (let j = 0; j < m; j++) if (instance[i][j] == 0) count++;
    return count;
};
for (let i of cases) {
    for (let j of i) map[j[0]][j[1]] = 1;
    let now = spread();
    if (now > max) max = now;
    for (let j of i) map[j[0]][j[1]] = 0;
}
console.log(max);
