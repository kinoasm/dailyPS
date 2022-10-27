const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n")
    .map((x) => x.trim());
const [[n, m, b], ...map] = inp.map((x) => x.split(" ").map(Number));
let [min, max] = [map[0][0], map[0][0]];
for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) {
        min = map[i][j] < min ? map[i][j] : min;
        max = map[i][j] > max ? map[i][j] : max;
    }
const fill = (k) => {
    let time = 0;
    let bag = b;
    for (let i = 0; i < n; i++)
        for (let j = 0; j < m; j++) {
            if (k > map[i][j]) {
                time += k - map[i][j];
                bag -= k - map[i][j];
            }
            if (map[i][j] > k) {
                time += 2 * (map[i][j] - k);
                bag += map[i][j] - k;
            }
        }
    if (bag < 0) return -1;
    return time;
};
let ans = Infinity;
let ansK = 0;
for (let i = min; i <= max; i++) {
    let now = fill(i);
    if (now != -1 && now <= ans) {
        ansK = i;
        ans = now;
    }
}
console.log(ans + " " + ansK);
