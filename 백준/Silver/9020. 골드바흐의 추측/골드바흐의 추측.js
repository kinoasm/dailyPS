let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .map((x) => Number(x.trim()));
let ans = "";
let prime = Array(10001).fill(true);
for (let i = 2; i < 400; i++) {
    if (prime[i]) {
        let k = i * i;
        while (k < prime.length) {
            prime[k] = false;
            k += i;
        }
    }
}
prime[0]=false;
prime[1]=false;
for (let i in arr) {
    let a = Math.floor(arr[i] / 2);
    let b = arr[i] - a;
    while (!prime[a] || !prime[b]) {
        a--;
        b++;
    }
    ans += a + " " + b + "\n";
}
console.log(ans.trim());
