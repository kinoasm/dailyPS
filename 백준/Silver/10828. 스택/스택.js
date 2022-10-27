let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [n] = arr.shift().trim().split(" ").map(Number);
arr = arr.map((x) => x.trim());
let que = [];
let res = "";
for (let i in arr) {
    let now = arr[i].slice(0, 3);
    switch (now) {
        case "pus":
            let val = Number(arr[i].split(" ")[1]);
            que.push(val);
            break;
        case "top":
            if (que.length == 0) res += -1 + "\n";
            else res += que[que.length - 1] + "\n";
            break;
        case "siz":
            res += que.length + "\n";
            break;
        case "emp":
            res += (que.length == 0) * 1 + "\n";
            break;
        case "pop":
            if (que.length == 0) res += -1 + "\n";
            else res += que.pop() + "\n";
            break;

        default:
            break;
    }
}
console.log(res.trim());
