//입력
let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
const [n, m] = arr.shift().trim().split(" ").map(Number);
arr = arr.map((x) => x.trim().split(" ").map(Number))[0];
let ans = [];
const permutation = (num, orig, selected) => {
    if (num < m) {
        orig.forEach((x) => {
            if (num == 0 || selected[selected.length - 1] <= x)
                permutation(num + 1, orig, [...selected, x]);
        });
    } else {
        ans.push(selected);
    }
};
permutation(0, arr, []);
ans = ans
    .sort((a, b) => {
        let i = 0;
        while (a[i] == b[i] && i < 9) i++;
        return a[i] - b[i];
    })
    .map((x) => x.join(" "))
    .filter((_, i, list) => list.indexOf(_) === i)
    .join("\n");
console.log(ans);
