const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const [[n, m], ...list] = inp.map((x) => x.split(" ").map(Number));
let ans = [];
let singer = [];
for (let i = 0; i < n; i++) singer.push([i + 1, 0, []]);
for (let i of list) {
    for (let j = 1; j < i.length - 1; j++) {
        singer[i[j] - 1][2].push(i[j + 1]);
        singer[i[j + 1] - 1][1]++;
    }
}
while (ans.length < n) {
    let isZero = false;
    for (let i in singer) {
        if (singer[i][1] === 0) {
            isZero = true;
            ans.push(singer[i][0]);
            for (let j of singer[i][2]) {
                singer[j - 1][1]--;
            }
            singer[i][1] = -1;
            break;
        }
    }
    if (!isZero) {
        console.log(0);
        ans = [];
        break;
    }
}
ans.length > 0 ? console.log(ans.join("\n")) : null;
