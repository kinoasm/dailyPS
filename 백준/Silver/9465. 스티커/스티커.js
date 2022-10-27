//입력
let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [t] = arr.shift().split(" ").map(Number);
let res = "";
for (let q = 0; q < t; q++) {
    let [n] = arr
        .slice(3 * q, 3 * q + 1)[0]
        .trim()
        .split(" ")
        .map(Number);
    let list = arr
        .slice(3 * q + 1, 3 * q + 3)
        .map((x) => x.trim().split(" ").map(Number));
    //algo
    if (n === 1) res += Math.max(list[0][0], list[1][0]) + "\n";
    else {
        let ans = [
            [list[0][0], list[1][0]],
            [list[1][0] + list[0][1], list[1][1] + list[0][0]],
        ];
        for (let i = 2; i < n; i++) {
            ans.push([
                list[0][i] +
                    Math.max(ans[i - 1][1], ans[i - 2][0], ans[i - 2][1]),
                list[1][i] +
                    Math.max(ans[i - 1][0], ans[i - 2][0], ans[i - 2][1]),
            ]);
        }
        let max = Math.max(ans[n - 1][0], ans[n - 1][1]);
        res += max + "\n";
    }
}
console.log(res.trim());
