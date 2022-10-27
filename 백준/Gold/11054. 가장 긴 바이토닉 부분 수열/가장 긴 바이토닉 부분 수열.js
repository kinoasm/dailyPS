//입력
let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
const [n] = arr.shift().trim().split(" ").map(Number);
arr = arr.map((x) => x.trim().split(" ").map(Number))[0];

let front = [[[1, arr[0]]]];
let back = [[[1, arr[arr.length - 1]]]];
let q = 1;
while (q < n) {
    let frontNow = [[1, arr[q]]];
    let backNow = [[1, arr[n - q - 1]]];
    for (let i of front[q - 1]) {
        if (arr[q] > i[1]) frontNow.push([i[0] + 1, arr[q]]);
        frontNow.push(i);
    }
    for (let i of back[0]) {
        if (arr[n - q - 1] > i[1]) backNow.push([i[0] + 1, arr[n - q - 1]]);
        backNow.push(i);
    }
    frontNow = frontNow
        .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]))
        .filter((_, i, list) => list.findIndex((x) => x[0] === _[0]) === i);
    backNow = backNow
        .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]))
        .filter((_, i, list) => list.findIndex((x) => x[0] === _[0]) === i);
    front.push(frontNow);
    back = [backNow, ...back];
    q++;
}
let max = 1;
for (let i in front) {
    let x = front[i][0][0];
    let y = back[i][0][0];
    if (x + y - 1 > max) max = x + y - 1;
}
console.log(max);
