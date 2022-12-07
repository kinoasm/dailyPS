const [n, ...list] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x.trim()));
let ans = [];
class minHeap {
  constructor() {
    this.heap = [null];
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  add(value) {
    this.heap.push(value);
    let current = this.heap.length - 1;
    let parent = current >> 1;
    while (current > 1 && this.heap[parent] > this.heap[current]) {
      this.swap(parent, current);
      current = parent;
      parent = current >> 1;
    }
  }
  size() {
    return this.heap.length - 1;
  }
  pop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();
    let current = 1;
    let left = current * 2;
    let right = left + 1;
    if (left > this.heap.size) return min;
    if (right > this.heap.size) {
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
  }
}
class maxHeap {
  constructor() {
    this.heap = [null];
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  add(value) {
    this.heap.push(value);
    let current = this.heap.length - 1;
    let parent = current >> 1;
    while (current > 1 && this.heap[parent] < this.heap[current]) {
      this.swap(parent, current);
      current = parent;
      parent = current >> 1;
    }
  }
  size() {
    return this.heap.length - 1;
  }
  pop() {
    const max = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();
    let current = 1;
    let left = current * 2;
    let right = left + 1;
    if (left > this.heap.size) return max;
    if (right > this.heap.size) {
      if (this.heap[left] > this.heap[current]) this.swap(left, current);
      return max;
    }
    while (
      this.heap[left] > this.heap[current] ||
      this.heap[right] > this.heap[current]
    ) {
      const maxIdx = this.heap[left] < this.heap[right] ? right : left;
      this.swap(maxIdx, current);
      current = maxIdx;
      left = current * 2;
      right = left + 1;
    }
    return max;
  }
}
class medianHeap {
  constructor() {
    this.minHeap = new minHeap();
    this.maxHeap = new maxHeap();
    this.count = 0;
  }
  add(value) {
    this.count++;
    if (value > this.median()) this.minHeap.add(value);
    else this.maxHeap.add(value);
    if (this.minHeap.size() - this.maxHeap.size() > 1)
      this.maxHeap.add(this.minHeap.pop());
    if (this.maxHeap.size() - this.minHeap.size() > 1)
      this.minHeap.add(this.maxHeap.pop());
  }
  median() {
    if (this.minHeap.size() > this.maxHeap.size()) return this.minHeap.heap[1];
    return this.maxHeap.heap[1];
  }
}
let med = new medianHeap();
for (let i in list) {
  med.add(list[i]);
  ans.push(med.median());
}
console.log(ans.join("\n"));
