let n = parseInt(
    require("fs").readFileSync("/dev/stdin").toString().trim()
);
let i = 1;
let tot = 1;
while (n > tot) {
    i++;
    tot += i;
}
let rem = n - tot + i;
let x = i + 1 - rem;
if (i % 2 == 1) {
    [rem, x] = [x, rem];
}
console.log(rem+'/'+x);