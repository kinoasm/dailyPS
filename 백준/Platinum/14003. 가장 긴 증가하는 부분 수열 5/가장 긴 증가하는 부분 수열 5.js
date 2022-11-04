const [[n], list] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim())
    .map((x) => x.split(" ").map(Number));
let lis = [list[0]];
let index = Array(n).fill(0);
for (let i = 1; i < n; i++) {
    if (list[i] > lis.at(-1)) {
        index[i] = lis.length;
        lis.push(list[i]);
    } else {
        let start = 0;
        let end = lis.length;
        while (start < end) {
            let mid = (start + end) >>> 1;
            if (list[i] > lis[mid]) start = mid + 1;
            else end = mid;
        }
        index[i] = end;
        lis[end] = list[i];
    }
}
let k = lis.length - 1;
let ans = [];
let i = index.length - 1;
while (i >= 0 && k >= 0) {
    if (index[i] === k) {
        ans.push(list[i]);
        k--;
    }
    i--;
}
console.log(lis.length);
console.log(ans.reverse().join(" "));
