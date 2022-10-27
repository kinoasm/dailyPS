let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [n, m, v] = arr.shift().trim().split(" ").map(Number);
arr = arr.map((x) => x.trim().split(" ").map(Number));
const dfs = (x) => {
    let que = [x];
    let visited = [];
    while (que.length > 0) {
        let now = que.pop();
        if (visited.indexOf(now) === -1) {
            visited.push(now);
            let newList = [];
            for (let i in arr) {
                if (arr[i][0] === now) {
                    newList.push(arr[i][1]);
                }
                if (arr[i][1] === now) {
                    newList.push(arr[i][0]);
                }
            }
            newList = newList.sort((a, b) => b - a);
            que = que.concat(newList);
        }
    }
    return visited.reduce((a, b) => a + " " + b, "").trim();
};
const bfs = (x) => {
    let que = [x];
    let visited = [];
    while (que.length > 0) {
        let now = que.shift();
        if (visited.indexOf(now) === -1) {
            visited.push(now);
            let newList = [];
            for (let i in arr) {
                if (arr[i][0] === now) {
                    newList.push(arr[i][1]);
                }
                if (arr[i][1] === now) {
                    newList.push(arr[i][0]);
                }
            }
            que = que.concat(newList.sort((a, b) => a - b));
        }
    }
    return visited.reduce((a, b) => a + " " + b, "").trim();
};
console.log(dfs(v));
console.log(bfs(v));
