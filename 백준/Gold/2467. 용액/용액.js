const [[n], list] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim().split(" ").map(Number));
function solution(m) {
    let sorted = m.sort((a, b) => a - b);
    let ans = [];
    let value = Infinity;
    let [start, end] = [0, m.length - 1];
    while (start < end) {
        let mix = sorted[end] + sorted[start];
        if (Math.abs(mix) < value) {
            value = Math.abs(mix);
            ans = [sorted[start], sorted[end]];
        }
        if (mix == 0) break;
        else if (mix < 0) start++;
        else end--;
    }
    return ans.join(" ");
}
console.log(solution(list));
