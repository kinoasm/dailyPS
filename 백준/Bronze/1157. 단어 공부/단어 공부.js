let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .toUpperCase()
    .split("");
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let list = Array(26).fill(0);
for (let i in input) {
    list[alphabet.indexOf(input[i])]++;
}
let max = list[0];
let idx = 0;
let isSame = false;
for (let i in list) {
    if (list[i] > max) {
        max = list[i];
        idx = i;
        isSame = false;
    } else if (Number(i)!==0 && list[i] == max) isSame = true;
}
if (isSame) console.log("?");
else console.log(alphabet[idx]);
