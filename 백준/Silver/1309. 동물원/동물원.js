let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let dp = [
    [0, 1],
    [2, 1],
];
while (dp.length <= n) {
    dp.push([
        (dp.at(-1)[0] + 2 * dp.at(-1)[1]) % 9901,
        (dp.at(-1)[1] + dp.at(-1)[0]) % 9901,
    ]);
}
console.log((dp[n][0] + dp[n][1]) % 9901);
