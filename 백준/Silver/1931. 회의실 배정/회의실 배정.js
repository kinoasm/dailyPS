let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [t] = arr.shift().trim().split(" ").map(Number);
arr = arr.map((x) => x.trim().split(" ").map(Number));
arr = arr.sort((a, b) => {
    if (a[1] == b[1]) {
        return a[0] - b[0];
    } else return a[1] - b[1];
});
let count = 0;
let last = 0;
for (let i in arr) {
    if (arr[i][0] >= last) {
        count++;
        last = arr[i][1];
    }
}
console.log(count);
