const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const [[n], ...list] = inp.map((x) => x.split(" ").map(Number));
let sum =
    BigInt(list[n - 1][0]) * BigInt(list[0][1]) -
    BigInt(list[n - 1][1]) * BigInt(list[0][0]);
for (let i = 0; i < n - 1; i++) {
    sum +=
        BigInt(list[i][0]) * BigInt(list[i + 1][1]) -
        BigInt(list[i][1]) * BigInt(list[i + 1][0]);
}
if (sum < 0n) sum = -sum;
console.log(
    sum % 2n === 0n
        ? (sum / 2n).toString() + ".0"
        : (sum / 2n).toString() + ".5"
);
