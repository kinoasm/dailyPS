let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [n] = arr.shift().split(" ").map(Number);
arr = arr.map((x) => x.trim().split(" ").map(Number))[0];
if (arr.length === 1) console.log(1);
else {
    let list = [[[1, arr[0]]]];
    for (let i = 1; i < n; i++) {
        let last = list[list.length - 1];
        let now = [];
        for (let j in last) {
            if (last[j][1] < arr[i]) {
                now.push([last[j][0] + 1, arr[i]]);
            }
            now.push(last[j]);
        }
        now.push([1, arr[i]]);
        now = now.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]));
        now = now.filter(
            (x, i) => now.findIndex((element) => element[0] === x[0]) === i
        );
        // console.log("filtered", now);
        list.push(now);
    }
    let max = list[list.length - 1][0][0];
    console.log(max);
}
