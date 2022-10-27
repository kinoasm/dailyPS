let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [n, m] = arr.shift().trim().split(" ").map(Number);
arr = arr.map((x) => x.trim().split(""));
let red, blue, out;
for (let i in arr) {
    for (let j in arr[i]) {
        if (arr[i][j] === "R") red = [Number(i), Number(j)];
        else if (arr[i][j] === "B") blue = [Number(i), Number(j)];
        else if (arr[i][j] === "O") out = [Number(i), Number(j)];
    }
}
arr[blue[0]][blue[1]] = ".";
arr[red[0]][red[1]] = ".";
const dir = [
    [0, 1, "R"],
    [0, -1, "L"],
    [1, 0, "D"],
    [-1, 0, "U"],
];
const move = (red, blue, d, path) => {
    let isBlue = false;
    let isOkay = false;
    let isRedEnd = false;
    let isBlueEnd = false;
    while (!isRedEnd || !isBlueEnd) {
        if (red[0] + d[0] === blue[0] && red[1] + d[1] === blue[1]) {
            isRedEnd = isBlueEnd;
        } else if (arr[red[0] + d[0]][red[1] + d[1]] === "O") {
            isOkay = true;
            red = [red[0] + d[0], red[1] + d[1]];
        } else if (arr[red[0] + d[0]][red[1] + d[1]] === ".")
            red = [red[0] + d[0], red[1] + d[1]];
        else isRedEnd = true;
        if (arr[blue[0] + d[0]][blue[1] + d[1]] === "O") {
            isBlue = true;
            blue = [blue[0] + d[0], blue[1] + d[1]];
        } else if (blue[0] + d[0] === red[0] && blue[1] + d[1] === red[1]) {
            isBlueEnd = isRedEnd;
        } else if (arr[blue[0] + d[0]][blue[1] + d[1]] === ".")
            blue = [blue[0] + d[0], blue[1] + d[1]];
        else isBlueEnd = true;
    }
    if (isBlue) {
        return false;
    } else if (isOkay) {
        return [path + d[2]];
    } else {
        return [red, blue, path + d[2]];
    }
};
let history = [red.join(".") + "/" + blue.join(".")];
let que = [[red, blue, ""]];
let isOkay = false;
let x;
let ans = "";
seq: for (let t = 0; t < 10; t++) {
    let newQue = [];
    for (let i of que) {
        for (let j in dir) {
            let now = move(i[0], i[1], dir[j], i[2]);
            if (now.length == 3) {
                let x = now[0].join(".");
                let y = now[1].join(".");
                let str = x + "/" + y;
                if (history.indexOf(str) === -1) {
                    history.push(str);
                    newQue.push(now);
                }
            } else if (now) {
                x = t + 1;
                isOkay = true;
                ans = now[0];
                break seq;
            }
        }
    }
    x++;
    que = newQue;
}
// console.log(history);
if (isOkay) console.log(x + "\n" + ans);
else console.log(-1);
