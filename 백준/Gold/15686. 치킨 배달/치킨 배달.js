//입력
let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
const [n, m] = arr.shift().trim().split(" ").map(Number);
arr = arr.map((x) => x.trim().split(" ").map(Number));
let house = [];
let chicken = [];
const toArr = (str) => str.split(",").map(Number);
for (let i in arr) {
    for (let j in arr[0]) {
        if (arr[i][j] == 2) chicken.push(i + "," + j);
        else if (arr[i][j] == 1) house.push(i + "," + j);
    }
}
let c = chicken.length;
let list = [];
const pick = (k, left, selected) => {
    if (k == m) {
        list.push(selected);
    } else {
        left.forEach((element, index) => {
            pick(k + 1, left.slice(index + 1), [...selected, element]);
        });
    }
};
pick(0, chicken, []);
const checkMin = (c, h) => {
    let sum = 0;
    for (let i in h) {
        let min = 2 * n;
        let x = toArr(h[i]);
        for (let j in c) {
            let y = toArr(c[j]);
            let dist = Math.abs(x[0] - y[0]) + Math.abs(x[1] - y[1]);
            if (min > dist) min = dist;
        }
        sum += min;
    }
    return sum;
};
let min;
for (let i in list) {
    let now = checkMin(list[i], house);
    if (!min) min = now;
    else min = Math.min(now, min);
}
console.log(min);
