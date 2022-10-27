let str = require("fs").readFileSync("/dev/stdin").toString().trim();
let arr = str.split("");
let calc = [];
let digit = [];
let now = "";
for (let i of arr) {
    if (i === "+" || i === "-") {
        digit.push(Number(now));
        calc.push(i);
        now = "";
    } else now += i;
}
digit.push(Number(now));
while (calc.indexOf("+") > -1) {
    let now = calc.indexOf("+");
    digit = digit
        .slice(0, now)
        .concat([digit[now] + digit[now + 1]])
        .concat(digit.slice(now + 2));
    calc = calc.slice(0, now).concat(calc.slice(now + 1));
}
while (calc.indexOf("-") > -1) {
    let now = calc.indexOf("-");
    digit = digit
        .slice(0, now)
        .concat([digit[now] - digit[now + 1]])
        .concat(digit.slice(now + 2));
    calc = calc.slice(0, now).concat(calc.slice(now + 1));
}
console.log(digit[0]);
