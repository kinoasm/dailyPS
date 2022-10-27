let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [n] = arr.shift().trim().split(" ").map(Number);
arr = arr.map((x) => x.trim().split(" ").map(Number));
let res = "";
for (let a in arr) {
    let [x, y] = arr[a];
    let gap = y - x;
    let i = 1;
    if (gap == i) res += i + "\n";
    else {
        while (gap > i * i) {
            i++;
        }
        if (i * i - gap >= i) {
            res += 2 * i - 2 + "\n";
        } else res += 2 * i - 1 + "\n";
    }
}
console.log(res.trim());
