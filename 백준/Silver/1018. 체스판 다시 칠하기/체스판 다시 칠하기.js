let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let [n, m] = arr.shift().split(" ").map(Number);
let min = 64;
for (let i = 0; i <= n - 8; i++) {
    for (let j = 0; j <= m - 8; j++) {
        let b = 0;
        let w = 0;
        for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {
                let parity = (i + x + j + y) % 2;
                if (arr[i + x][j + y] == "B") parity == 0 ? b++ : w++;
                else parity == 0 ? w++ : b++;
            }
        }
        let now = Math.min(b, w);
        if (now < min) min = now;
    }
}
console.log(min);
