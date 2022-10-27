let input = require("fs")
    .readFileSync("dev/stdin")
    .toString()
    .split("\n");
let time = input[0]
    .trim()
    .split(" ")
    .map((x) => parseInt(x));
let t = time[0] * 60 + time[1] + parseInt(input[1]);
let min = t % 60;
let hour = (t - min) / 60;
if (hour >= 24) hour -= 24;
console.log(hour + " " + min);
