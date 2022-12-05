const [[n, m], ...list] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(" ").map(Number));
let cheese = [];
for (let i = 0; i < n; i++)
  for (let j = 0; j < m; j++) if (list[i][j] === 1) cheese.push(i + "," + j);
const dir = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];
const isIn = ([x, y]) => x >= 0 && y >= 0 && x < n && y < m;
const outAir = () => {
  let visit = Array.from({ length: n }, () => Array(m).fill(0));
  let que = [[0, 0]];
  visit[0][0] = 1;
  list[0][0] = 2;
  while (que.length > 0) {
    let now = que.pop();
    for (let i in dir) {
      let [x, y] = [now[0] + dir[i][0], now[1] + dir[i][1]];
      if (
        isIn([x, y]) &&
        visit[x][y] === 0 &&
        (list[x][y] === 0 || list[x][y] === 2)
      ) {
        list[x][y] = 2;
        visit[x][y] = 1;
        que.push([x, y]);
      }
    }
  }
};
let time = 0;
while (cheese.length > 0) {
  outAir();
  let toDel = [];
  for (let i in cheese) {
    let cnt = 0;
    let now = cheese[i].split(",").map(Number);
    for (let j in dir)
      if (list[now[0] + dir[j][0]][now[1] + dir[j][1]] === 2) cnt++;
    if (cnt > 1) toDel.push(cheese[i]);
  }
  for (let i in toDel) {
    let [x, y] = toDel[i].split(",").map(Number);
    list[x][y] = 0;
  }
  cheese = cheese.filter((x) => !toDel.includes(x));
  time++;
}
console.log(time);
