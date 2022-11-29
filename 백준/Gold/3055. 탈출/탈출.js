const [str, ...list] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim());
let ans = 0;
const [r, c] = str.split(" ").map(Number);
const dir = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
const isIn = ([x, y]) => x >= 0 && y >= 0 && x < r && y < c;
let visit = Array.from({ length: r }, () => Array(c).fill(0));
let que = [];
let water = [];
for (let i in list)
  for (let j in list[i]) {
    if (list[i][j] === "D") visit[i][j] = -2;
    else if (list[i][j] === "S") que.push([Number(i), Number(j)]);
    else if (list[i][j] === "X") visit[i][j] = -1;
    else if (list[i][j] === "*") {
      visit[i][j] = 1;
      water.push([Number(i), Number(j)]);
    }
  }
let time = 1;
let find = false;
sequence: while (que.length > 0) {
  if (water.length > 0) {
    let newWater = [];
    for (let i in water) {
      for (let j in dir) {
        let next = [water[i][0] + dir[j][0], water[i][1] + dir[j][1]];
        if (
          isIn(next) &&
          (visit[next[0]][next[1]] === 0 || visit[next[0]][next[1]] === 2)
        ) {
          visit[next[0]][next[1]] = 1;
          newWater.push(next);
        }
      }
    }
    water = newWater;
  }
  let newQue = [];
  for (let i of que) {
    for (let j in dir) {
      let next = [i[0] + dir[j][0], i[1] + dir[j][1]];
      if (isIn(next)) {
        if (visit[next[0]][next[1]] === 0) {
          visit[next[0]][next[1]] = 1;
          newQue.push(next);
        }
        if (visit[next[0]][next[1]] === -2) {
          find = true;
          break sequence;
        }
      }
    }
  }
  que = newQue;
  time++;
}

console.log(find ? time : "KAKTUS");
