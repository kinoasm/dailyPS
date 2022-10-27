const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
let [n, k] = inp;
let list = Array.from({ length: n }, (_, i) => i + 1);
let i = 0;
let ans = [];
while (i <= list.length - 1) {
    if ((i + 1) % k == 0) {
        ans.push(list[i]);
        list = list.slice(i + 1);
        i -= k;
    } else list.push(list[i]);
    i++;
}
console.log("<" + ans.join(", ") + ">");
