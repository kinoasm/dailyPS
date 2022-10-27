let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
let [n, k] = arr;
let que = [[n]];
let visited = Array(100002).fill(0);
visited[n] = 1;
let count = 0;
seq: while (true) {
    let now = que.pop();
    let newList = [];
    for (let i in now) {
        let val = now[i];
        if (val === k) break seq;
        else if (val - 1 >= 0 && visited[val - 1] == 0) {
            newList.push(val - 1);
            visited[val - 1] = 1;
        }
        if (visited[val + 1] == 0) {
            newList.push(val + 1);
            visited[val + 1] = 1;
        }
        if (visited[val * 2] == 0) {
            newList.push(val * 2);
            visited[val * 2] = 1;
        }
    }
    count++;
    que.push(newList);
}
console.log(count);
