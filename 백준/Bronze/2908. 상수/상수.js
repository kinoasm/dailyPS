let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");
const rev = (str) => str.split("").reverse().join("");
console.log(Math.max(rev(input[0]), rev(input[1])));
