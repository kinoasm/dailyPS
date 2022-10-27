const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let ans = "";
let t = Number(inp.slice(0, 1)[0]);
let p = 1;
for (let q = 0; q < t; q++) {
    let n = Number(inp.slice(p, ++p)[0]);
    let applicants = inp
        .slice(p, p + n)
        .map((x) => x.split(" ").map(Number))
        .sort((a, b) => a[0] - b[0]);
    p += n;
    let min = applicants[0][1];
    let count = 1;
    for (let i = 1; i < applicants.length; i++) {
        if (applicants[i][1] < min) {
            count++;
            min = applicants[i][1];
        }
    }
    console.log(count);
}
