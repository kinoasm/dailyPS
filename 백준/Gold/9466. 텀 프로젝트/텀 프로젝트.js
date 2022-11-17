const [[t], ...list] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim().split(" ").map(Number));
let ans = [];
for (let q = 0; q < t; q++) {
    const n = list.slice(2 * q, 2 * q + 2)[0][0];
    const students = list.slice(2 * q, 2 * q + 2)[1];
    let check = Array(n).fill(1);
    let visit = Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        if (visit[i]) {
        } else if (students[i] - 1 === i) {
            check[i] = 0;
            visit[i] = true;
        } else {
            let idx = i;
            let que = [];
            let isCycle = true;
            while (!visit[idx]) {
                let to = students[idx] - 1;
                visit[idx] = true;
                que.push(idx);
                idx = to;
            }
            if (que.indexOf(idx) === -1) isCycle = false;
            if (isCycle)
                for (let q = que.indexOf(idx); q < que.length; q++)
                    check[que[q]] = 0;
        }
    }
    let cnt = check.reduce((a, b) => a + b, 0);
    ans.push(cnt);
}
console.log(ans.join("\n"));
