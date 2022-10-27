const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let [[n, m], num] = inp.map((x) => x.split(" ").map(Number));
num = num
    .sort((a, b) => a - b)
    .filter((value, index, array) => array.indexOf(value) === index);
let ans = [];
const pickM = (pick, left) => {
    if (pick.length == m) {
        let now = pick.join(" ");
        ans.push(now);
    } else {
        left.forEach((value, index, array) => {
            pickM([...pick, value], array.slice());
        });
    }
};
pickM([], num);
console.log(ans.join("\n"));
