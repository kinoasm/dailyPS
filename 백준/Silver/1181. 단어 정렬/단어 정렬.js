let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [n] = arr.shift().trim().split(" ").map(Number);
arr = arr
    .map((x) => x.trim())
    .sort((a, b) => {
        if (a.length == b.length) {
            return a.localeCompare(b);
        } else return a.length - b.length;
    });
arr = arr.filter((_, i) => arr.indexOf(_) == i);
for (let i in arr) console.log(arr[i]);
