let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let isOne = false;
let list = [n];
let history = [];
let count = -1;
while (!isOne) {
    let newList = [];
    for (let i in list) {
        if (list[i] === 1) isOne = true;
        if (list[i] % 2 == 0 && history.indexOf(list[i] / 2) === -1) {
            newList.push(list[i] / 2);
            history.push(list[i] / 2);
        }
        if (list[i] % 3 == 0 && history.indexOf(list[i] / 3) === -1) {
            newList.push(list[i] / 3);
            history.push(list[i] / 3);
        }
        if (history.indexOf(list[i] - 1) === -1) {
            newList.push(list[i] - 1);
            history.push(list[i] - 1);
        }
    }
    count++;
    list = newList;
}
console.log(count);
