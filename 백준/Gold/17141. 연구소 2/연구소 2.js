const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n")
    .map((x) => x.trim());
let [[n, m], ...map] = inp.map((x) => x.split(" ").map(Number));
let twoList = [];
for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) if (map[i][j] == 2) twoList.push([i, j]);
const isZero = (visit) => {
    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
            if (map[i][j] == 0 && visit[i][j] == false) return true;
    return false;
};
let poisons = [];
const pickN = (pick, left) => {
    if (pick.length == twoList.length - m) poisons.push(pick);
    else
        left.forEach((value, index, array) =>
            pickN([...pick, value], array.slice(index + 1))
        );
};
pickN([], twoList);
const isIn = ([x, y]) => x >= 0 && y >= 0 && x < n && y < n;
const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];
const bfs = () => {
    let time = 0;
    let que = twoList.filter((a) => map[a[0]][a[1]] == 2);
    let visit = [];
    for (let i = 0; i < n; i++) visit.push(Array(n).fill(false));
    for (let i in que) visit[que[i][0]][que[i][1]] = true;
    while (que.length > 0) {
        let newQue = [];
        for (let i in que) {
            for (let j in dir) {
                let now = [que[i][0] + dir[j][0], que[i][1] + dir[j][1]];
                if (
                    isIn(now) &&
                    map[now[0]][now[1]] == 0 &&
                    !visit[now[0]][now[1]]
                ) {
                    visit[now[0]][now[1]] = true;
                    newQue.push(now);
                }
            }
        }
        que = newQue;
        time++;
    }
    if (isZero(visit)) return Infinity;
    return time - 1;
};

let min = Infinity;
for (let i of poisons) {
    for (let j of i) map[j[0]][j[1]] = 0;
    let now = bfs();
    if (min > now) min = now;
    for (let j of i) map[j[0]][j[1]] = 2;
}
console.log(min === Infinity ? -1 : min);
