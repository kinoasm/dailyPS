let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let [[n, s], ...[list]] = arr.map((x) => x.split(" ").map(Number));
let ans = 0;
const pickN = (pick, left) => {
    if (pick.length > 0 && pick.reduce((a, b) => a + b, 0) === s) ans++;
    left.forEach((value, index) =>
        pickN([...pick, value], left.slice(index + 1))
    );
};
pickN([], list);
console.log(ans);
