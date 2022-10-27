const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let [[n], ...list] = inp.map((x) => x.split(" ").map(Number));
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
            list[j][k] = Math.max(list[j][k], list[j][i] * list[i][k]);
        }
    }
}
console.log(list.map((x) => x.join(" ")).join("\n"));
