const [[n, m], ...list] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(" ").map(Number));
const query = list.slice(n);
let l = Math.ceil(Math.log2(n));
let p = Math.pow(2, l);
const tree = Array.from({ length: Math.pow(2, l + 1) }, () => []);
list.slice(0, n).map((x, i) => (tree[p + i] = [x[0], x[0], i + 1, i + 1]));
while (l > 0) {
  l--;
  p = Math.pow(2, l);
  for (let i = p; i < 2 * p; i++) {
    if (tree[2 * i].length > 0 || tree[2 * i + 1].length > 0) {
      tree[i] = [
        tree[2 * i + 1].length > 0
          ? Math.min(tree[2 * i][0], tree[2 * i + 1][0])
          : tree[2 * i][0],
        tree[2 * i + 1].length > 0
          ? Math.max(tree[2 * i][1], tree[2 * i + 1][1])
          : tree[2 * i][1],
        tree[2 * i][2],
        tree[2 * i].length > 0 ? tree[2 * i + 1][3] : tree[2 * i][3],
      ];
    }
  }
}
const get = (a, b, idx, check) => {
  if (tree[idx].length === 0 || a > tree[idx][3] || b < tree[idx][2]) {
    if (check) return -Infinity;
    return Infinity;
  }
  if (a <= tree[idx][2] && tree[idx][3] <= b) {
    if (check) return tree[idx][1];
    return tree[idx][0];
  }
  if (check) return Math.max(get(a, b, 2 * idx, 1), get(a, b, 2 * idx + 1, 1));
  return Math.min(get(a, b, 2 * idx, 0), get(a, b, 2 * idx + 1, 0));
};
const ans = [];
for (let i of query) {
  let [a, b] = i;
  ans.push([get(a, b, 1, 0)]);
}
console.log(ans.map((x) => x.join(" ")).join("\n"));
