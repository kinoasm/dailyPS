let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [n] = arr.shift().trim().split(" ").map(Number);
arr = arr.map((x) => x.trim().split(" ").map(Number));
let list = [];
for (let i = 0; i < n; i++) list.push([]);
let visited = Array(n).fill(0);
visited[0] = 1;
let parents = Array(n).fill(0);
for (let i in arr) {
    list[arr[i][1] - 1].push(arr[i][0]);
    list[arr[i][0] - 1].push(arr[i][1]);
}
let que = [1];
while (que.length > 0) {
    let newQue = [];
    for (let i of que) {
        let now = list[i - 1];
        now = now.filter((x) => visited[x - 1] === 0);
        for (let j of now) {
            parents[j - 1] = i;
            newQue.push(j);
        }
        visited[i - 1] = 1;
    }
    que = newQue;
}
let ans = "";
parents.shift();
for (let i of parents) ans += i + "\n";
console.log(ans.trim());
