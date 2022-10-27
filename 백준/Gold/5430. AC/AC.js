let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const [t] = arr.slice(0, 1)[0].split(" ").map(Number);
let answer = [];
seq: for (let q = 0; q < t; q++) {
    let query = arr.slice(3 * q + 1, 3 * q + 2)[0];
    let list = arr.slice(3 * q + 3, 3 * q + 4)[0].slice(1, -1);
    if (list.length === 0) list = [];
    else list = list.split(",").map(Number);
    let rev = false;
    for (let i of query) {
        if (i === "R") rev = !rev;
        else if (list.length === 0) {
            answer.push("error");
            continue seq;
        } else {
            if (rev) list.pop();
            else list.shift();
        }
    }
    if (rev) list = list.reverse();
    answer.push("[" + list.join(",") + "]");
}
console.log(answer.join("\n"));
