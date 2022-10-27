let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const [t] = arr.slice(0, 1)[0].split(" ").map(Number);
let answer = "";
let l = 1;
let q = 0;
while (q < t) {
    let c = Number(arr.slice(l, l + 1)[0]);
    l++;
    let cloth = [];
    let list = arr.slice(l, l + c).map((x) => x.split(" "));
    for (let i of list) {
        if (cloth.findIndex((x) => x[0] === i[1]) === -1)
            cloth.push([i[1], i[0]]);
        else cloth[cloth.findIndex((x) => x[0] === i[1])].push(i[0]);
    }
    let count = 1;
    for (let i of cloth) count *= i.length;
    answer += count - 1 + "\n";
    l += c;
    q++;
}
console.log(answer.trim());
