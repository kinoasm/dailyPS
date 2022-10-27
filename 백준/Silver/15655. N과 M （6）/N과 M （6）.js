let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let [[n, m], ...[list]] = arr.map((x) => x.split(" ").map(Number));
list = list.sort((a, b) => a - b);
let ans = "";
const pickN = (pick, left) => {
    if (pick.length === m) ans += pick.join(" ") + "\n";
    else
        left.forEach((value, index) =>
            pickN([...pick, value], left.slice(index + 1))
        );
};
pickN([], list);
console.log(ans.trim());
