const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let [[n], list] = inp.map((x) => x.split(" ").map(Number));
let ans = Array.from({ length: n }, () => []);
const tree = (arr, k) => {
    if (arr.length > 1) {
        ans[k].push(arr[(arr.length - 1) / 2]);
        tree(arr.slice(0, (arr.length - 1) / 2), k + 1);
        tree(arr.slice((arr.length + 1) / 2), k + 1);
    } else ans[k].push(arr[0]);
};
tree(list, 0);
console.log(ans.map((x) => x.join(" ")).join("\n"));
