let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [n] = arr.shift().trim().split(" ").map(Number);
arr = arr.map((x) => x.trim().split(" ").map(Number));
let res = "";
for (let i in arr) {
    let [x1, y1, r1, x2, y2, r2] = arr[i];
    if (x1 == x2 && y1 == y2) {
        if (r1 == r2) res += -1;
        else res += 0;
    } else {
        let dist = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
        let rad = (r1 + r2) * (r1 + r2);
        let gap = (r1 - r2) * (r1 - r2);
        if (dist > rad) res += 0;
        else if (dist < rad) {
            if (dist < gap) res += 0;
            else if (dist == gap) res += 1;
            else res += 2;
        } else res += 1;
    }
    res += "\n";
}
console.log(res.trim());

