let arr = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [r, c] = arr.slice(0, 1).map((x) => x.trim().split(" ").map(Number))[0];
arr = arr.slice(1).map((x) => x.trim().split(""));
const dirX = [0, 1, 0, -1];
const dirY = [1, 0, -1, 0];
const isIn = (x, y) => x >= 0 && y >= 0 && x < r && y < c;
let isOkay = true;
seq: for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
        if (arr[i][j] == "S") {
            for (let k = 0; k < 4; k++) {
                let [x, y] = [i + dirX[k], j + dirY[k]];
                if (isIn(x, y)) {
                    if (arr[x][y] === ".") arr[x][y] = "D";
                    else if (arr[x][y] === "W") {
                        isOkay = false;
                        break seq;
                    }
                }
            }
        }
    }
}
if (isOkay) {
    let res = 1 + "\n";
    res += arr.map((x) => x.join("")).join("\n");
    console.log(res);
} else console.log(0);
