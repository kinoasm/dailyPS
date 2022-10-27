let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [n] = arr.shift().trim().split(" ").map(Number);
arr = arr.map((x) => x.trim().split(" ").map(Number));
let res = "";
let list = [];
for (let i in arr) {
    let cnt = 0;
    for (let j in arr) {
        if (i != j && arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) cnt++;
    }
    list.push(cnt + 1);
}
for (let i in list) res += list[i] + " ";
console.log(res.trim());

