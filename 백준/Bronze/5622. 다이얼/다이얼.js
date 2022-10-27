let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("");
let list = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
let ans = 0;
for (let i in input) {
    let cnt;
    for (let j in list) {
        if (list[j].indexOf(input[i]) !== -1) cnt = Number(j);
    }
    ans += cnt + 3;
}
console.log(ans);
