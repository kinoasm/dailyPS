const inp = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.split("\n")
	.map((x) => x.trim());
const [[n], ...works] = inp.map((x) => x.split(" ").map(Number));
const times = [[[0, 0]]];
for (let i = 1; i <= n; i++) {
	let last = times.at(-1);
	let que = [];
	for (let j in last) {
		if (last[j][0] < 2) {
			que.push([0, last[j][1]]);
			que.push([works[i - 1][0], last[j][1] + works[i - 1][1]]);
		} else que.push([last[j][0] - 1, last[j][1]]);
	}
	que = que
		.sort((a, b) => (a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]))
		.filter((val, idx, arr) => arr.findIndex((x) => x[0] == val[0]) == idx);
	times.push(que);
}
let last = times.at(-1);
let max = last[1][0] == 1 ? Math.max(last[1][1], last[0][1]) : last[0][1];
console.log(max);
