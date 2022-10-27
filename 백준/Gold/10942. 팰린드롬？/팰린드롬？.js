let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let [n] = arr.slice(0, 1).map(Number);
let list = arr.slice(1, 2)[0].split(" ").map(Number);
let question = arr.slice(3).map((x) => x.split(" ").map(Number));
let palindrome = Array(n)
    .fill(0)
    .map((x) => Array(n).fill(0));
for (let i = 0; i < n; i++) {
    let k = 1;
    palindrome[i][i] = 1;
    while (i - k >= 0 && i + k < n && list[i - k] === list[i + k]) {
        palindrome[i - k][i + k] = 1;
        k++;
    }
    let l = 0;
    while (i + 1 + l < n && i - l >= 0 && list[i + 1 + l] === list[i - l]) {
        palindrome[i - l][i + l + 1] = 1;
        l++;
    }
}
let res = "";
for (let i of question) {
    if (palindrome[i[0] - 1][i[1] - 1] === 0) res += "0\n";
    else res += "1\n";
}
console.log(res.trim());
