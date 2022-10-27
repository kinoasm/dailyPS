let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
const isPrime = (n) => {
    if (n == 1) return false;
    else if (n == 2 || n == 3) return true;
    else {
        for (let i = 2; i * i <= n; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }
};
let isFirst = true;
let first = 0;
let sum = 0;
for (let i = arr[0]; i <= arr[1]; i++) {
    if (isPrime(i)) {
        if (isFirst) {
            first = i;
            isFirst = false;
        }
        sum += i;
    }
}
if (isFirst) console.log(-1);
else {
    console.log(sum);
    console.log(first);
}
