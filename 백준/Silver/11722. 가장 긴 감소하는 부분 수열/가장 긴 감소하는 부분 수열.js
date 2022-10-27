const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n")
    .map((x) => x.trim());
const [[n], arr] = inp.map((x) => x.split(" ").map(Number));
if (arr.length === 1) console.log(1);
else {
    let list = [[[1, arr[n - 1]]]];
    for (let i = n - 2; i >= 0; i--) {
        const last = list[list.length - 1];
        let now = [];
        for (let j in last) {
            if (last[j][1] < arr[i]) {
                now.push([last[j][0] + 1, arr[i]]);
            }
            now.push(last[j]);
        }
        now.push([1, arr[i]]);
        now = now.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]));
        now = now.filter(
            (x, i) => now.findIndex((element) => element[0] === x[0]) === i
        );
        list.push(now);
    }
    let max = list[list.length - 1][0][0];
    console.log(max);
}
