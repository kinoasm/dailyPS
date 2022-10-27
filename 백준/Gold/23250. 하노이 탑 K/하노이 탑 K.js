const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");
let n = Number(inp[0]);
let k = BigInt(inp[1]);
let [from, extra, to] = [1, 2, 3];
while (k != 2n ** BigInt(n - 1)) {
    if (k > 2n ** BigInt(n - 1)) {
        k -= 2n ** BigInt(n - 1);
        n--;
        [from, extra, to] = [extra, from, to];
    } else {
        n--;
        [from, extra, to] = [from, to, extra];
    }
}
console.log(from + " " + to);
