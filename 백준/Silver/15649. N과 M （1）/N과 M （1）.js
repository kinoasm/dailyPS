let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
const [n, m] = arr;
let num = Array.from({ length: n }, (_, i) => i + 1);
let list = [];
const pickM = (selected, left) => {
    if (selected.length === m) list.push(selected.join(" "));
    else {
        left.forEach((element, index, origList) => {
            pickM(
                [...selected, element],
                [...origList.slice(0, index), ...origList.slice(index + 1)]
            );
        });
    }
};
pickM([], num);
console.log(list.join("\n"));
