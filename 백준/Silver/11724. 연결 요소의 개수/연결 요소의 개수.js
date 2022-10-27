let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [n, m] = arr.slice(0, 1)[0].split(" ").map(Number);
arr = arr.slice(1).map((x) => x.trim().split(" ").map(Number));
let visit = Array(n).fill(0);
let count = 0;
let minus = 0;
for (let i of arr) {
    if (visit[i[0] - 1] == 0 && visit[i[1] - 1] == 0) {
        count++;
        visit[i[0] - 1] = count;
        visit[i[1] - 1] = count;
    } else if (visit[i[0] - 1] == 0 || visit[i[1] - 1] == 0) {
        if (visit[i[0] - 1] == 0) visit[i[0] - 1] = visit[i[1] - 1];
        else visit[i[1] - 1] = visit[i[0] - 1];
    } else if (visit[i[0] - 1] != visit[i[1] - 1]) {
        let [small, big] =
            visit[i[0] - 1] < visit[i[1] - 1]
                ? [visit[i[0] - 1], visit[i[1] - 1]]
                : [visit[i[1] - 1], visit[i[0] - 1]];
        for (let j = 0; j < n; j++) {
            if (visit[j] == big) visit[j] = small;
        }
        minus--;
    }
}
for (let i in visit) {
    if (visit[i] == 0) {
        count++;
        visit[i] = count;
    }
}
console.log(count + minus);
