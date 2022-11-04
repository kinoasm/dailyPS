class Heap {
    constructor() {
        this.heap = [null];
    }
    size = () => this.heap.length - 1;
    swap = (a, b) =>
        ([this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]);
    heapPush = (value) => {
        this.heap.push(value);
        let current = this.size();
        let parent = current >>> 1;
        while (current > 1 && this.heap[parent] > this.heap[current]) {
            this.swap(current, parent);
            current = parent;
            parent = current >>> 1;
        }
    };
    heapPop = () => {
        const min = this.heap[1];
        if (this.heap.length <= 2) this.heap = [null];
        else this.heap[1] = this.heap.pop();
        let current = 1;
        let left = current * 2;
        let right = left + 1;
        if (!this.heap[left]) return min;
        if (!this.heap[right]) {
            if (this.heap[left] < this.heap[current]) this.swap(left, current);
            return min;
        }
        while (
            this.heap[left] < this.heap[current] ||
            this.heap[right] < this.heap[current]
        ) {
            const minIdx = this.heap[left] > this.heap[right] ? right : left;
            this.swap(minIdx, current);
            current = minIdx;
            left = current * 2;
            right = left + 1;
        }
        return min;
    };
}
const [[n, m], ...list] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim())
    .map((x) => x.split(" ").map(Number));
let ans = [];
let inDegree = Array(n + 1).fill(0);
let graph = Array.from({ length: n + 1 }, () => []);
for (let i of list) {
    inDegree[i[1]]++;
    graph[i[0]].push(i[1]);
}
const que = new Heap();
for (let i = 1; i <= n; i++) if (!inDegree[i]) que.heapPush(i);
while (que.size()) {
    let now = que.heapPop();
    ans.push(now);
    graph[now].forEach((x) => {
        inDegree[x]--;
        if (!inDegree[x]) que.heapPush(x);
    });
}
console.log(ans.join(" "));
