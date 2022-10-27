let arr = require("fs").readFileSync("/dev/stdin").toString().trim();
let n = Number(arr);
let i = 2;
while (n > 1) {
    if (n % i == 0) {
        console.log(i);
        n = n / i;
    } else i++;
}
