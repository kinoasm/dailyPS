const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim().split(" "));
const [n, m, k] = inp.slice(0, 1)[0].map(Number);
const num = inp.slice(1, 1 + n).map((x) => BigInt(x[0]));
const query = inp.slice(1 + n);
class SegmentTree {
    constructor(origin) {
        const size = origin.length;
        const exp = Math.ceil(Math.log2(size)) + 1;
        const nodeCnt = 1 << exp;

        this.origin = origin;
        this.nodes = Array(nodeCnt);
        const init = (node, start, end) => {
            if (start === end) {
                this.nodes[node] = this.origin[start];
                return;
            }
            const mid = (start + end) >> 1;
            const left = node * 2;
            const right = left + 1;
            init(left, start, mid);
            init(right, mid + 1, end);
            this.nodes[node] = this.nodes[left] + this.nodes[right];
        };
        init(1, 0, size - 1);
    }
    update(idx, val) {
        const diff = val - this.origin[idx];
        this.origin[idx] = val;
        const change = (node, start, end) => {
            this.nodes[node] = this.nodes[node] + diff;
            if (start === end) return;
            const mid = (start + end) >> 1;
            if (idx <= mid) change(node * 2, start, mid);
            else change(node * 2 + 1, mid + 1, end);
        };
        change(1, 0, this.origin.length - 1);
    }
    sum(left, right) {
        const closureSum = (node, start, end) => {
            if (left > end || right < start) return 0n;
            if (left <= start && end <= right) return this.nodes[node];
            const mid = (start + end) >> 1;
            const leftSum = closureSum(node * 2, start, mid);
            const rightSum = closureSum(node * 2 + 1, mid + 1, end);
            return leftSum + rightSum;
        };
        return closureSum(1, 0, this.origin.length - 1);
    }
}
const tree = new SegmentTree(num);
const ans = [];
for (let i of query) {
    if (i[0] === "1") {
        let [x, y] = [Number(i[1]), BigInt(i[2])];
        tree.update(x - 1, y);
    } else {
        let [x, y] = [Number(i[1]), Number(i[2])];
        ans.push(tree.sum(x - 1, y - 1));
    }
}
console.log(ans.map((x) => x.toString()).join("\n"));
