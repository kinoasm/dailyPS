let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map((x) => x.split("").reverse());
if (arr[0].length > arr[1].length) [arr[0], arr[1]] = [arr[1], arr[0]];
let carry = 0;
let ans = "";
for (let i in arr[1]) {
    let temp = (arr[0][i] ? Number(arr[0][i]) : 0) + Number(arr[1][i]) + carry;
    if (temp >= 10) {
        carry = 1;
        temp -= 10;
    } else carry = 0;
    ans = temp + ans;
}
if (carry == 1) ans = 1 + ans;
console.log(ans);
