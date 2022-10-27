let arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
arr = arr.map((x) => Number(x.trim()));
let remain = arr.reduce((a, b) => a + b, 0) - 100;
let x, y;
seq: for (let i in arr) {
    for (let j in arr) {
        if (i !== j && arr[i] + arr[j] == remain) {
            x = Number(i);
            y = Number(j);
            break seq;
        }
    }
}
arr = arr.filter((_, i) => i !== x && i !== y).sort((a, b) => a - b);
let res = "";
for (let i in arr) {
    res += arr[i] + "\n";
}
console.log(res.trim());
