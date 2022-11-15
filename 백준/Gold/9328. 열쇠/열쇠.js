const list = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const q = Number(list.slice(0, 1)[0]);
let t = 0;
let l = 1;
const dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
];
let answer = [];
const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
while (t < q) {
    const [n, m] = list
        .slice(l, ++l)[0]
        .split(" ")
        .map(Number);
    const board = list.slice(l, l + n).map((x) => x.split(""));
    let visit = Array.from({ length: n }, () => Array(m).fill(false));
    l += n;
    const crypto = list.slice(l, ++l)[0];
    const key = Array(26).fill(0);
    if (crypto !== "0") {
        let now = crypto.split("");
        for (let i in now) key[lowerCase.indexOf(now[i])]++;
    }
    let que = [];
    let count = 0;
    const isIn = ([x, y]) => x >= 0 && y >= 0 && x < n && y < m;
    let noList = [];

    const checkTile = ([x, y]) => {
        let tile = board[x][y];
        let isOkay = true;
        if (tile === "*") return;
        else if (tile === "$") count++;
        else if (lowerCase.includes(tile)) {
            let idx = lowerCase.indexOf(tile);
            key[idx]++;
            for (let i in noList)
                if (noList[i][0] === idx) que.push(noList[i].slice(1));
        } else if (key[upperCase.indexOf(tile)] > 0) {
        } else if (upperCase.includes(tile)) {
            isOkay = false;
            noList.push([upperCase.indexOf(tile), x, y]);
        }
        if (isOkay) {
            que.push([x, y]);
            visit[x][y] = true;
        }
    };

    for (let i = 0; i < m; i++) {
        checkTile([0, i]);
        checkTile([n - 1, i]);
    }
    for (let i = 1; i < n - 1; i++) {
        checkTile([i, 0]);
        checkTile([i, m - 1]);
    }
    while (que.length > 0) {
        let [x, y] = que.pop();
        visit[x][y] = true;
        for (let i in dir) {
            let next = [x + dir[i][0], y + dir[i][1]];
            if (isIn(next) && visit[next[0]][next[1]] === false) {
                checkTile(next);
            }
        }
    }
    answer.push(count);
    t++;
}
console.log(answer.join("\n"));
