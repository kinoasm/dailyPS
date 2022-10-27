const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const n = Number(inp.slice(0, 1));
const k = Number(inp.slice(1, 2));
let apples = inp.slice(2, 2 + k).map((x) => x.split(" ").map(Number));
const l = Number(inp.slice(2 + k, 3 + k));
const rotate = (str) => (str == "L" ? -1 : 1);
let rotates = inp
    .slice(3 + k)
    .map((x) => x.split(" "))
    .map((x) => [Number(x[0]), rotate(x[1])]);
const start = [1, 1, 0];
const snakes = [[1, 1, 0]];
let time = 1;
const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
];
const isIn = ([x, y]) => x > 0 && y > 0 && x <= n && y <= n;
let now = [1, 1, 0];
seq: while (true) {
    let next = [now[0] + dir[now[2]][0], now[1] + dir[now[2]][1], now[2]];
    if (!isIn(next)) break seq;
    for (let i in snakes)
        if (snakes[i][0] == next[0] && snakes[i][1] == next[1]) break seq;
    let isEaten = false;
    for (let i in apples)
        if (apples[i][0] == next[0] && apples[i][1] == next[1]) {
            isEaten = true;
            apples = apples.filter((_, j) => j != Number(i));
            break;
        }
    if (!isEaten) snakes.shift();
    if (rotates.length > 0 && time == rotates[0][0]) {
        next[2] += rotates[0][1];
        rotates.shift();
        if (next[2] < 0) next[2] += 4;
        else if (next[2] > 3) next[2] -= 4;
    }
    snakes.push(next);
    now = next;
    time++;
}
console.log(time);
