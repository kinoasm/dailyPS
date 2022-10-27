const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
inp.shift();
let num = inp.map(Number).sort((a, b) => a - b);
let [minus, zero, plus] = [0, 0, 0];
for (let i in num) {
    if (num[i] < 0) minus++;
    else if (num[i] > 0) plus++;
    else zero++;
}
let sum = 0;
let i = 0;
let j = num.length - 1;
while (plus > 1) {
    if (num[j - 1] == 1) sum += num[j - 1] + num[j];
    else sum += num[j - 1] * num[j];
    j -= 2;
    plus -= 2;
}
while (minus > 1) {
    sum += num[i] * num[i + 1];
    i += 2;
    minus -= 2;
}
if (minus == 1 && !zero) sum += num[i];
if (plus == 1) sum += num[j];
console.log(sum);
