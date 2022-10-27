let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => parseInt(x));
for (let a in arr) {
    let count = 0;
    let n = arr[a];
    if (n == 0) continue;
    prime: for (let i = n + 1; i <= 2 * n; i++) {
        if (i == 2 || i == 3) count++;
        else {
            for (let x = 2; x * x <= i; x++) {
                if (i % x == 0) continue prime;
            }
            count++;
        }
    }
    console.log(count);
}
