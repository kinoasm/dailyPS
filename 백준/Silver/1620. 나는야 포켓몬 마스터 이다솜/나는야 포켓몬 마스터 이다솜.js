const [head, ...list] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim());
const [n, m] = head.split(" ").map(Number);
let ans = [];
const pokemon = new Map();
for (let i = 0; i < n; i++) pokemon.set(list[i], i + 1);
for (let i = n; i < n + m; i++) {
  if (isNaN(list[i])) {
    ans.push(pokemon.get(list[i]));
  } else ans.push(list[list[i] - 1]);
}
console.log(ans.join("\n"));
