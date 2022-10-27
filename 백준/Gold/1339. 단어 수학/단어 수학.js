const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let words = inp.slice(1);
let value = Array(26).fill(0);
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (let i in words) {
    let now = words[i].split("").reverse().join("");
    for (let j = 0; j < now.length; j++)
        value[now.charCodeAt(j) - 65] += Math.pow(10, j);
}
value = value.map((x, i) => [alphabet[i], x]).sort((a, b) => b[1] - a[1]);
let sum = 0;
for (let i = 0; i < 9; i++) sum += value[i][1] * (9 - i);
console.log(sum);
