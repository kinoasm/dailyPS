const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n")
    .map((x) => x.trim());
let [[n], list] = inp.map((x) => x.split(" ").map(Number));
if (n === 1) console.log(list[0]);
else {
    let dp = [[list[0], list[0]]];
    for (let i = 1; i < n; i++) {
        for (let j in dp)
            if (list[i] > dp[j][0]) dp.push([list[i], dp[j][1] + list[i]]);
        dp.push([list[i], list[i]]);
        dp = dp
            .sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]))
            .filter((x, i, l) => l.findIndex((q) => q[0] === x[0]) === i);
    }
    console.log(dp.sort((a, b) => b[1] - a[1])[0][1]);
}
