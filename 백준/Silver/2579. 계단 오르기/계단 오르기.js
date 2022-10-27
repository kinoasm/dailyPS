let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [n] = arr.shift().trim().split(" ").map(Number);
arr = arr.map((x) => x.trim().split(" ").map(Number)[0]);
if (n == 1) console.log(arr[0]);
else if (n == 2) console.log(arr[0] + arr[1]);
else {
    let list = [];
    list.push(arr[0]);
    list.push(arr[1] + arr[0]);
    list.push(Math.max(arr[0], arr[1]) + arr[2]);
    for (let i = 3; i < n; i++) {
        list.push(Math.max(list[i - 2], list[i - 3] + arr[i - 1]) + arr[i]);
    }
    console.log(list[list.length - 1]);
}
