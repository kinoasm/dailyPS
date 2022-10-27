let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
let [n, m] = arr;
let ans = "";
let nums = Array.from({ length: n }, (_, i) => i + 1);
const pickM = (k) => {
    if (k.length == m) ans += k.join(" ") + "\n";
    else nums.forEach((value, index) => pickM([...k, value]));
};
pickM([]);
console.log(ans.trim());
