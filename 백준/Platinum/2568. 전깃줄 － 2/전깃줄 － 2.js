const [[n], ...list] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim())
    .map((x) => x.split(" ").map(Number));
let ans = [];
list.sort((a, b) => a[0] - b[0]);
let lis = [list[0]];
let index = Array(n).fill(0);
for (let i = 1; i < n; i++) {
    if (list[i][1] > lis.at(-1)[1]) {
        lis.push(list[i]);
        index[i] = lis.length - 1;
    } else {
        let start = 0;
        let end = lis.length;
        while (start < end) {
            let mid = Math.floor((start + end) / 2);
            if (list[i][1] > lis[mid][1]) start = mid + 1;
            else end = mid;
        }
        index[i] = end;
        lis[end] = list[i];
    }
}
let idx = lis.length - 1;
let i = n - 1;
while (i >= 0) {
    if (idx === index[i]) idx--;
    else ans.push(list[i][0]);
    i--;
}
ans.sort((a, b) => a - b);
console.log(ans.length);
console.log(ans.join("\n"));
