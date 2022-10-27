let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let [n, k] = arr.slice(0, 1)[0].split(" ").map(Number);
let list = arr.slice(1).map(Number);
let min = 0;
let max = list.reduce((a, b) => Math.max(a, b));
let mid = Math.floor((min + max) / 2);
const count = (len) => {
    let sum = 0;
    for (let i of list) sum += Math.floor(i / len);
    return sum;
};
while (true) {
    if (count(mid) <= k - 1) {
        max = mid - 1;
        mid = Math.floor((min + max) / 2);
    } else {
        let orig = mid;
        min = mid + 1;
        mid = Math.floor((min + max) / 2);
        if (mid === orig) break;
    }
}
console.log(mid);
