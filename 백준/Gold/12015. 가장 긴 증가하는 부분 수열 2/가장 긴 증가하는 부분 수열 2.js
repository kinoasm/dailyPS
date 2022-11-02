const [[n], list] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim())
    .map((x) => x.split(" ").map(Number));
let lis = [list[0]];
for (let i = 1; i < n; i++) {
    if (list[i] > lis.at(-1)) lis.push(list[i]);
    else {
        let start = 0;
        let end = lis.length;
        while (start < end) {
            let mid = Math.floor((start + end) / 2);
            if (list[i] > lis[mid]) start = mid + 1;
            else end = mid;
        }
        lis[end] = list[i];
    }
}
console.log(lis.length);
