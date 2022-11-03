const [[n], cards, [m], check] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim())
    .map((x) => x.split(" ").map(Number));
let ans = [];
let cardMap = new Map();
for (let i of cards)
    cardMap.has(i) ? cardMap.set(i, cardMap.get(i) + 1) : cardMap.set(i, 1);
for (let i of check) cardMap.has(i) ? ans.push(cardMap.get(i)) : ans.push(0);
console.log(ans.join(' '));
