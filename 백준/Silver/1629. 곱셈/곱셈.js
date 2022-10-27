const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");
let [a, b, c] = inp.map(Number);
const toArr = (num) => {
    let res = [];
    while (num > 0) {
        res.push(num % 2);
        num = Math.floor(num / 2);
    }
    return res;
};
let list = toArr(b);
let rem = [a % c];
while (rem.length < list.length) {
    let now = rem.at(-1);
    rem.push(Number((BigInt(now) * BigInt(now)) % BigInt(c)));
}
let now = 1;
for (let i in list) {
    if (list[i] == 1) now = Number((BigInt(now) * BigInt(rem[i])) % BigInt(c));
}
console.log(now);
