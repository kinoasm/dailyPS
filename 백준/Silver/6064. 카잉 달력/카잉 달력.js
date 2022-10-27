const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let [[n], ...list] = inp.map((x) => x.split(" ").map(Number));
let ans = [];
seq: for (let q in list) {
    let [m, n, x, y] = list[q];
    for (let i = 0; i < m; i++) {
        if ((n * i + y) % m === x || (x === m && (n * i + y) % m === 0)) {
            ans.push(n * i + y);
            continue seq;
        }
    }
    ans.push(-1);
}
console.log(ans.join("\n"));
