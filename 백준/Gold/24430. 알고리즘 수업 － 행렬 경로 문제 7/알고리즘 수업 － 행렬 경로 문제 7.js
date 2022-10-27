let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [n] = arr.shift().trim().split(" ").map(Number);
let maps = arr.slice(0, n).map((x) => x.trim().split(" ").map(Number));
let m = Number(arr.slice(n, n + 1)[0].trim());
let points = arr.slice(n + 1).map((x) => x.trim().split(" ").map(Number));
let sum = [];
let visit = [];
for (let i = 0; i < n; i++) {
    visit.push(Array(n).fill(0));
}
for (let i of points) visit[i[0] - 1][i[1] - 1] = 1;
for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
        if (j == 0) {
            if (i == 0) row.push([maps[0][0], visit[0][0]]);
            else
                row.push([
                    sum[i - 1][0][0] + maps[i][0],
                    sum[i - 1][0][1] + visit[i][j],
                ]);
        } else {
            if (i == 0)
                row.push([
                    row[row.length - 1][0] + maps[i][j],
                    row[row.length - 1][1] + visit[i][j],
                ]);
            else {
                let x = sum[i - 1][j];
                let y = row[j - 1];
                if (x[0] > y[0]) {
                    row.push([x[0] + maps[i][j], visit[i][j] + x[1]]);
                } else if (x[0] < y[0]) {
                    row.push([y[0] + maps[i][j], visit[i][j] + y[1]]);
                } else {
                    row.push([
                        x[0] + maps[i][j],
                        Math.max(x[1], y[1]) + visit[i][j],
                    ]);
                }
            }
        }
    }
    sum.push(row);
}
console.log(sum[n - 1][n - 1][0] + " " + sum[n - 1][n - 1][1]);
