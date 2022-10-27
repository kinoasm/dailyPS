let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n")
    .map((x) => x.trim().split(" ").map(Number));
let [n] = arr.slice(0, 1);
let num = arr.slice(1, 2)[0].sort((a, b) => a - b);
let [m] = arr.slice(2, 3);
let list = arr.slice(3)[0];
let ans = "";
seq: for (let i in list) {
    let now = list[i];
    let min = 0;
    let max = n - 1;
    while (num[min] <= now && now <= num[max]) {
        let mid = Math.floor((min + max) / 2);
        if (num[mid] == now || num[max] == now) {
            ans += 1 + "\n";
            continue seq;
        } else if (max - min == 1) {
            ans += 0 + "\n";
            continue seq;
        } else if (num[mid] > now) max = mid;
        else min = mid;
    }
    ans += 0 + "\n";
}
console.log(ans.trim());
