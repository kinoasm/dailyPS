let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let n = parseInt(input.shift());
let count = 0;
for (let i in input) {
    let str = input[i].trim().split("");
    let hist = [];
    let last = str[0];
    let isGroup = true;
    for (let i in str) {
        if (str[i] != last && hist.indexOf(str[i]) !== -1) {
            isGroup = false;
            break;
        } else if (hist.indexOf(str[i]) === -1) {
            hist.push(str[i]);
        }
        last = str[i];
    }
    if (isGroup) count++;
}
console.log(count);
