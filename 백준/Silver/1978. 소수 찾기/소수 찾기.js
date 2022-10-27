let input = require("fs")
    .readFileSync("dev/stdin")
    .toString()
    .split("\n");
let n = parseInt(input.shift());
let arr = input[0].split(" ").map((x) => parseInt(x));
const isPrime = (i) => {
    if (i < 4 && i > 1) return true;
    else if (i == 1) return false;
    else {
        for (let j = 2; j * j <= i; j++) if (i % j == 0) return false;
        return true;
    }
};
let cnt = 0;
for (let i in arr) {
    if (isPrime(arr[i])) cnt++;
}
console.log(cnt);
