const input = [];
const readline = require("readline");
readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map(Number));
  })
  .on("close", () => {
    solve();
    process.exit();
  });
const solve = () => {
  const ans = [];
  const [[n, m], ...list] = input;
  let parent = Array.from({ length: n + 1 }, (_, i) => i);
  const findParent = (x) => {
    if (parent[x] != x) parent[x] = findParent(parent[x]);
    return parent[x];
  };
  const unionParent = (x, y) => {
    let [a, b] = [findParent(x), findParent(y)];
    if (a < b) parent[b] = a;
    else if (b < a) parent[a] = b;
  };
  const checkSame = (x, y) => findParent(x) === findParent(y);
  for (let i of list)
    i[0] === 0
      ? unionParent(i[1], i[2])
      : ans.push(checkSame(i[1], i[2]) ? "YES" : "NO");
  console.log(ans.join("\n"));
};
