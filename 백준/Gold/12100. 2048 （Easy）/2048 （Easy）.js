let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
const [n] = arr.shift().trim().split(" ").map(Number);
arr = arr.map((x) =>
    x
        .trim()
        .split(" ")
        .map(Number)
        .map((x) => (x == 0 ? 0 : Math.log2(x)))
);
const count = (list) => {
    let max = 0;
    for (let i in list)
        for (let j in list[0]) if (list[i][j] > max) max = list[i][j];
    return max;
};
const pivot = (list) => list[0].map((x, i) => list.map((x) => x[i]));
const move = (list, dir) => {
    if (dir > 1) list = pivot(list);
    let newList = [];
    for (let i in list) {
        let reference = list[i];
        if (dir % 2 == 0) reference = reference.reverse();
        let row = [];
        let j = 0;
        while (j < n) {
            if (reference[j] == reference[j + 1] && reference[j] > 0) {
                row.push(reference[j] + 1);
                j++;
            } else if (reference[j] > 0) {
                let k = 1;
                while (j + k < n && reference[j + k] == 0) k++;
                if (j + k < n && reference[j + k] == reference[j]) {
                    row.push(reference[j] + 1);
                    j = j + k;
                } else {
                    row.push(reference[j]);
                }
            }
            j++;
        }
        while (row.length < n) row.push(0);
        if (dir % 2 == 0) reference = reference.reverse();
        if (dir % 2 == 0) row = row.reverse();
        newList.push(row);
    }
    list = newList;
    if (dir > 1) list = pivot(list);
    return list;
};
const str = (list) => list.map((x) => x.join("  ")).join("\n");
let visited = [str(arr)];
let list = [arr];
let i = 0;
let max = count(arr);
while (i < 5) {
    let newList = [];
    for (let j = 0; j < 4; j++) {
        for (let i in list) {
            let newArr = move(list[i], j);
            let strA = str(newArr);
            if (visited.indexOf(strA) === -1) {
                visited.push(strA);
                newList.push(newArr);
                let cnt = count(newArr);
                if (cnt > max) max = cnt;
            }
        }
    }
    list = newList;
    i++;
}
// visited.forEach((x) => console.log(x + "\n"));
console.log(Math.pow(2, max));
