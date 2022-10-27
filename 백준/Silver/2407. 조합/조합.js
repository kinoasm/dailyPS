let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
let [n, m] = arr;
let list = Array.from(Array(n + 2), () => Array(m + 2).fill(0));
const bigSum = (str1, str2) => {
    if (str1.length > str2.length) [str1, str2] = [str2, str1];
    let res = "";
    let overflow = 0;
    str1 = str1.split("").reverse();
    str2 = str2.split("").reverse();
    while (str1.length < str2.length) str1.push("0");
    for (let i = 0; i < str2.length; i++) {
        let x = Number(str1[i]) + Number(str2[i]) + overflow;
        if (x > 9) {
            res = x - 10 + res;
            overflow = 1;
        } else {
            res = x + res;
            overflow = 0;
        }
    }
    if (overflow == 1) res = 1 + res;
    return res;
};
const dp = (x, y) => {
    if (list[x][y]) return list[x][y];
    if (y === 1 || x === y) return (list[x][y] = 1 + "");
    else return (list[x][y] = bigSum(dp(x - 1, y - 1), dp(x - 1, y)));
};
console.log(dp(n + 1, m + 1));
