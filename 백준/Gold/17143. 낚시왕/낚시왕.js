const [[r, c, m], ...list] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(" ").map(Number));
const dir = [
  [0, 0],
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
let ans = 0;
let pos = 1;
let board = Array.from({ length: r + 1 }, () => Array(c + 1).fill(-1));
const catchShark = (position) => {
  let get = [];
  for (let i in list) {
    if (list[i] !== undefined && list[i][1] === position) {
      if (get.length > 0) {
        if (list[i][0] < get[0]) get = [...list[i], Number(i)];
      } else get = [...list[i], Number(i)];
    }
  }
  if (get.length > 0) {
    list[get[5]] = undefined;
    return get[4];
  } else return 0;
};
const move = (shark, idx) => {
  let [x, y, l, d, w] = shark;
  x--;
  y--;
  x = (x + dir[d][0] * l) % (2 * r - 2);
  y = (y + dir[d][1] * l) % (2 * c - 2);
  if (x < 0) x += 2 * r - 2;
  if (y < 0) y += 2 * c - 2;
  x++;
  y++;
  if (x > r) {
    x = 2 * r - x;
    d = 3 - d;
  }
  if (y > c) {
    y = 2 * c - y;
    d = 7 - d;
  }
  if (board[x][y] !== -1) {
    let lastW = list[board[x][y]][4];
    if (w > lastW) {
      list[board[x][y]] = undefined;
      board[x][y] = idx;
    } else return undefined;
  } else board[x][y] = idx;
  return [x, y, l, d, w];
};
while (pos <= c) {
  ans += catchShark(pos);
  board = Array.from({ length: r + 1 }, () => Array(c + 1).fill(-1));
  for (let i in list)
    list[i] = list[i] !== undefined ? move(list[i], Number(i)) : undefined;
  pos++;
}
console.log(ans);
