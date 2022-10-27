let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let ans = "";
let l = 0;
const ToStr = ([x, y]) => x + "," + y;
const ToCoord = (str) => str.split(",").map(Number);
const dirX = [0, 0, 1, 1, 1, -1, -1, -1];
const dirY = [1, -1, 1, 0, -1, 1, 0, -1];
const Dfs = (x, y, mat) => {
    const IsIn = ([i, j]) =>
        i >= 0 && y >= 0 && i < mat.length && j < mat[0].length;
    let visited = [ToStr([x, y])];
    let que = [ToStr([x, y])];
    while (que.length > 0) {
        let now = ToCoord(que.pop());
        for (let q = 0; q < 8; q++) {
            let change = [now[0] + dirX[q], now[1] + dirY[q]];
            if (
                IsIn(change) &&
                mat[change[0]][change[1]] === 1 &&
                visited.indexOf(ToStr(change)) === -1
            ) {
                que.push(ToStr(change));
                visited.push(ToStr(change));
            }
        }
    }

    return visited;
};
const Maps = (mat) => {
    let count = 0;
    let history = [];
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1 && history.indexOf(ToStr([i, j])) === -1) {
                count++;
                let now = Dfs(i, j, mat);
                history = [...history, ...now];
            }
        }
    }
    return count;
};
while (true) {
    let [w, h] = arr
        .slice(l, l + 1)[0]
        .split(" ")
        .map(Number);
    if (w == 0 && h == 0) break;
    l++;
    let mat = arr.slice(l, l + h).map((x) => x.split(" ").map(Number));
    l += h;
    ans += Maps(mat) + "\n";
}
console.log(ans.trim());
