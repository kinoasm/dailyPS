let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let len = (n + "").length;
for (let i = n - 10 * len; i <= n; i++) {
    let res =
        i +
        (i + "")
            .split("")
            .map(Number)
            .reduce((a, b) => a + b, 0);
    if (res == n) {
        console.log(i);
        break;
    } else if (i == n && res != n) console.log(0);
}
