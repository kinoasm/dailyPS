//입력
let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
const [v, e] = arr.shift().trim().split(" ").map(Number);
arr = arr
    .map((x) => x.trim().split(" ").map(Number))
    .sort((a, b) => a[2] - b[2]);
let value = 0;
let i = 0;
let list = Array(v).fill(0);
// console.log(list, value);
let k = 0;
while (i < arr.length) {
    let now = arr[i];
    // console.log(now);
    if (list[now[0] - 1] > 0 && list[now[1] - 1] === list[now[0] - 1]) {
        // console.log("사이클 취소");
        i++;
    } else {
        if (list[now[0] - 1] === 0 && list[now[1] - 1] === 0) {
            // console.log("신규");
            k++;
            list[now[0] - 1] = k;
            list[now[1] - 1] = k;
        } else if (list[now[0] - 1] === 0 || list[now[1] - 1] === 0) {
            // console.log("추가");
            let max = Math.max(list[now[0] - 1], list[now[1] - 1]);
            list[now[0] - 1] = max;
            list[now[1] - 1] = max;
        } else {
            // console.log("합침");
            let min = Math.min(list[now[0] - 1], list[now[1] - 1]);
            let max = Math.max(list[now[0] - 1], list[now[1] - 1]);
            for (let i in list) if (list[i] === max) list[i] = min;
        }
        value += now[2];
        if (list.filter((x) => x != 1).length == 0) break;
        i++;
    }
    // console.log(list, value);
}
// console.log(list, value);
console.log(value);
