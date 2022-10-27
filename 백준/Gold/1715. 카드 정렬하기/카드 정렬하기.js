const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let num = inp
    .slice(1)
    .map(Number)
    .sort((a, b) => a - b);
if (num.length == 1) console.log(0);
else {
    class Heap {
        constructor() {
            this.heap = [null];
        }
        swap(a, b) {
            [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
        }
        push(value) {
            this.heap.push(value);
            let cur = this.heap.length - 1;
            let par = (cur / 2) >> 0;
            while (cur > 1 && this.heap[par] > this.heap[cur]) {
                this.swap(par, cur);
                cur = par;
                par = (cur / 2) >> 0;
            }
        }
        pop() {
            const min = this.heap[1];
            if (this.heap.length <= 2) this.heap = [null];
            else this.heap[1] = this.heap.pop();
            let cur = 1;
            let left = cur * 2;
            let right = cur * 2 + 1;
            if (!this.heap[left]) return min;
            if (!this.heap[right]) {
                if (this.heap[left] < this.heap[cur]) this.swap(left, cur);
                return min;
            }
            while (
                this.heap[left] < this.heap[cur] ||
                this.heap[right] < this.heap[cur]
            ) {
                const minIdx =
                    this.heap[left] > this.heap[right] ? right : left;
                this.swap(minIdx, cur);
                cur = minIdx;
                left = cur * 2;
                right = cur * 2 + 1;
            }
            return min;
        }
        size() {
            return this.heap.length - 1;
        }
    }
    let heap = new Heap();
    for (let i in num) heap.push(num[i]);
    let sum = 0;
    while (heap.size() > 1) {
        let a = heap.pop();
        let b = heap.pop();
        sum += a + b;
        heap.push(a + b);
    }
    console.log(sum);
}
