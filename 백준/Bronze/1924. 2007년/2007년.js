let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
let [m, d] = arr;
let list = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
for (let i = 0; i < m - 1; i++) {
    d += list[i];
}
let day = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
console.log(day[(d - 1) % 7]);
