let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let n = Number(arr.slice(0, 1)[0]);
arr = arr.slice(1).map((x) => x.split(" ").map(Number)[0]);
let que = [];
let k = 1;
let ans = "";
let isNo = false;
seq: for (let i of arr) {
    if (que.length === 0) {
        que.push(k);
        ans += "+\n";
        k++;
    }
    while (que[que.length - 1] < i) {
        if (k > n) {
            isNo = true;
            break seq;
        }
        que.push(k);
        ans += "+\n";
        k++;
    }
    if (que[que.length - 1] === i) {
        que.pop();
        ans += "-\n";
    } else if (que[que.length - 1] > i) {
        isNo = true;
        break seq;
    }
}
if (!isNo) console.log(ans.trim());
else console.log("NO");
