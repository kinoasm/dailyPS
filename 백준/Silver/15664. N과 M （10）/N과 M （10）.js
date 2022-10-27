const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let [[n, m], num] = inp.map((x) => x.split(" ").map(Number));
num = num.sort((a, b) => a - b);
let ans = [];
const pickM = (pick, left) => {
    if (pick.length == m) {
        let now = pick.join(" ");
        if (ans.indexOf(now) === -1) ans.push(now);
    } else {
        left.forEach((value, index, array) => {
            pickM([...pick, value], array.slice(index + 1));
        });
    }
};
pickM([], num);
console.log(ans.join("\n"));
