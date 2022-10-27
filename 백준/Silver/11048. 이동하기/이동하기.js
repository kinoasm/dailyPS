const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n")
    .map((x) => x.trim());
let [[n, m], ...map] = inp.map((x) => x.split(" ").map(Number));
let dp = [];
for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < m; j++) {
        if (i == 0) {
            if (j == 0) row.push(map[i][j]);
            else row.push(row.at(-1) + map[i][j]);
        } else {
            if (j == 0) row.push(dp.at(-1)[0] + map[i][j]);
            else row.push(Math.max(dp.at(-1)[j], row.at(-1)) + map[i][j]);
        }
    }
    dp.push(row);
}
console.log(dp.at(-1).at(-1));
