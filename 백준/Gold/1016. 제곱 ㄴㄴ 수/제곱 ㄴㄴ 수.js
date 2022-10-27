let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
let [n, m] = arr;
let list = [];
for (let i = n; i <= m; i++) list.push(1);
for (let i = 2; i * i <= m; i++) {
    let k = i * i;
    let rem = n % k;
    let x = rem == 0 ? 0 : k - rem;
    while (x <= m - n) {
        list[x] = 0;
        x += k;
    }
}
console.log(list.reduce((a, b) => a + b, 0));
