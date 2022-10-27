let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [t] = arr.shift().trim().split(" ").map(Number);
const isIn = (a, b, x, y, r) => (a - x) * (a - x) + (b - y) * (b - y) > r * r;
let res = "";
for (let q = 0; q < t; q++) {
    let [x1, y1, x2, y2] = arr.shift().trim().split(" ").map(Number);
    let n = Number(arr.shift().trim());
    let count = 0;
    for (let i = 0; i < n; i++) {
        let star = arr.shift().trim().split(" ").map(Number);
        if (
            isIn(x1, y1, star[0], star[1], star[2]) !==
            isIn(x2, y2, star[0], star[1], star[2])
        )
            count++;
    }
    res += count + "\n";
}
console.log(res.trim());
