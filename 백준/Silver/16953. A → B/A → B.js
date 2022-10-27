let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
let [n, m] = arr;
let que = [n];
let history = [];
let q = 1;
if (n === m) console.log(0);
else {
    let isOkay = false;
    seq: while (que.length > 0) {
        let newQue = [];
        for (let i of que) {
            let x = i * 2;
            let y = i * 10 + 1;
            if (x == m || y == m) {
                console.log(q + 1);
                isOkay = true;
                break seq;
            } else {
                if (x < m && history.indexOf(x) === -1) {
                    newQue.push(x);
                    history.push(x);
                }
                if (y < m && history.indexOf(y) === -1) {
                    newQue.push(y);
                    history.push(y);
                }
            }
        }
        q++;
        que = newQue;
    }
    if (!isOkay) console.log(-1);
}
