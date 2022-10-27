let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());

let ans = "";
arr.shift();
let list = [];
for (let i of arr) {
    if (i.slice(0, 3) === "pus") {
        if (i.slice(5, 6) === "b") list.push(Number(i.split(" ")[1]));
        else list.unshift(Number(i.split(" ")[1]));
    } else if (i.slice(0, 3) === "pop") {
        if (i.slice(4, 5) === "b") {
            if (list.length === 0) ans += "-1\n";
            else ans += list.pop() + "\n";
        } else {
            if (list.length === 0) ans += "-1\n";
            else ans += list.shift() + "\n";
        }
    } else if (i.slice(0, 3) === "siz") ans += list.length + "\n";
    else if (i.slice(0, 3) === "emp") ans += (list.length === 0 ? 1 : 0) + "\n";
    else if (i.slice(0, 3) === "fro") {
        if (list.length === 0) ans += "-1\n";
        else ans += list[0] + "\n";
    } else if (i.slice(0, 3) === "bac") {
        if (list.length === 0) ans += "-1\n";
        else ans += list[list.length - 1] + "\n";
    }
}
console.log(ans.trim());
