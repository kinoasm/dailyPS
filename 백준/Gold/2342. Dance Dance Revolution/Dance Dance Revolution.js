let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
arr.pop();
let list = [[[0, 0, 0]]];
const move = (orig, foot, to) => {
    let now = foot === 0 ? orig[0] : orig[1];
    let point = orig[2];
    if (now === 0) point += 2;
    else if (now === to) point++;
    else if (now % 2 === to % 2) point += 4;
    else point += 3;
    return foot === 0 ? [to, orig[1], point] : [orig[0], to, point];
};
for (let q of arr) {
    let listNow = list[list.length - 1];
    let listNew = [];
    for (let i of listNow) {
        let now = move(i, 0, q);
        if (listNew.length === 0) listNew.push(now);
        else {
            let isOkay = true;
            for (let j of listNew) {
                if (j[0] == now[0] && j[1] == now[1]) {
                    isOkay = false;
                    if (j[2] > now[2]) j[2] = now[2];
                }
            }
            if (isOkay) listNew.push(now);
        }
        now = move(i, 1, q);
        let isOkay = true;
        for (let j of listNew) {
            if (j[0] == now[0] && j[1] == now[1]) {
                isOkay = false;
                if (j[2] > now[2]) j[2] = now[2];
            }
        }
        if (isOkay) listNew.push(now);
    }
    list.push(listNew);
}
let min = list[list.length - 1][0][2];
for (let i of list[list.length - 1]) if (min > i[2]) min = i[2];
console.log(min);
