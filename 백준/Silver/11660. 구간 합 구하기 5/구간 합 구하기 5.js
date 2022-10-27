//입력
let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
const [n, m] = arr.shift().trim().split(" ").map(Number);
arr = arr.map((x) => x.trim().split(" ").map(Number));
let array = arr.slice(0, n);
let query = arr.slice(n);
let sum = [];
for (let i = 0; i < n; i++) {
    let row = [];
    let s = 0;
    for (let j = 0; j < n; j++) {
        s += array[i][j];
        if (i == 0) row.push(s);
        else {
            row.push(sum[i - 1][j] + s);
        }
    }
    sum.push(row);
}
let ans = "";
for (let i of query) {
    let res = sum[i[2] - 1][i[3] - 1];
    if (i[0] > 1) res -= sum[i[0] - 2][i[3] - 1];
    if (i[1] > 1) res -= sum[i[2] - 1][i[1] - 2];
    if (i[0] > 1 && i[1] > 1) res += sum[i[0] - 2][i[1] - 2];
    ans += res + "\n";
}
console.log(ans.trim());
