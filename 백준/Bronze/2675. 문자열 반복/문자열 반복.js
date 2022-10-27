let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
input.shift();
for (let i in input) {
    let arr = input[i].trim().split(" ");
    let x = parseInt(arr[0]);
    let strArr = arr[1].split("");
    let res = "";
    for (let j in strArr) {
        res += strArr[j].repeat(x);
    }
    console.log(res);
}
