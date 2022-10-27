let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let t = Number(arr[0]);
for (let q = 0; q < t; q++) {
    let [n, m] = arr
        .slice(2 * q + 1, 2 * q + 2)[0]
        .split(" ")
        .map(Number);
    let list = arr
        .slice(2 * q + 2, 2 * q + 3)[0]
        .split(" ")
        .map(Number)
        .map((x, i) => [i, x]);
    let number = Array(9).fill(0);
    for (let i in list) number[list[i][1] - 1]++;
    let now = 0;
    let cnt = 0;
    while (true) {
        if (
            number.slice(list[now][1]).reduce((a, b) => a + (b > 0) * 1, 0) ===
            0
        ) {
            if (list[now][0] === m) break;
            number[list[now][1] - 1]--;
            cnt++;
        } else {
            list.push(list[now]);
        }
        now++;
    }
    console.log(cnt + 1);
}
