let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const [t] = arr.slice(0, 1)[0].split(" ").map(Number);
let answer = "";
class Heap {
    constructor() {
        this.heap = [null];
    }
    swap = (a, b) =>
        ([this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]);
    push(value) {
        this.heap.push(value);
        let current = this.heap.length - 1;
        let parent = Math.floor(current / 2);
        while (current > 1 && this.heap[parent] > this.heap[current]) {
            [this.heap[parent], this.heap[current]] = [
                this.heap[current],
                this.heap[parent],
            ];
            current = parent;
            parent = Math.floor(current / 2);
        }
    }
    pop() {
        const min = this.heap[1];
        if (this.heap.length <= 2) this.heap = [null];
        else this.heap[1] = this.heap.pop();
        let current = 1;
        let left = current * 2;
        let right = left + 1;
        if (!this.heap[left]) return min;
        if (!this.heap[right]) {
            if (this.heap[left] < this.heap[current]) {
                this.swap(left, current);
            }
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
    }
}

const list = arr.slice(1).map(Number);
let heap = new Heap();
for (let i of list) {
    if (i == 0) {
        let now = heap.pop();
        answer += (now === undefined ? 0 : now) + "\n";
    } else heap.push(i);
}
console.log(answer.trim());
