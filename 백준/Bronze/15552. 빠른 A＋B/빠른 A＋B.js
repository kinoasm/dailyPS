const input = require("fs")
    .readFileSync("./dev/stdin")
    .toString()
    .split("\n");

let answer = "";

for (let i = 1; i <= input[0]; i++) {
    let num = input[i].trim().split(" ");
    let sum = parseInt(num[0]) + parseInt(num[1]);
    answer += sum + "\n";
}

console.log(answer.trim());
