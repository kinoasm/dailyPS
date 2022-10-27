let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const [n] = arr.slice(0, 1)[0].split(" ").map(Number);
const list = arr.slice(1).map((x) => x.split(" ").map(Number)[0]);
if (list.length === 1) {
    console.log(list[0]);
} else if (list.length === 2) {
    console.log(list[0] + list[1]);
} else {
    let drinks = [
        [list[0], 0],
        [list[1], list[0] + list[1]],
    ];
    let max = list[0];
    for (let i = 2; i < list.length; i++) {
        max = Math.max(drinks[i - 2][0], drinks[i - 2][1], max);
        drinks.push([max + list[i], drinks[i - 1][0] + list[i]]);
    }
    console.log(
        Math.max(
            drinks[drinks.length - 1][1],
            drinks[drinks.length - 1][0],
            drinks[drinks.length - 2][1]
        )
    );
}
