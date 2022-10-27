let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
let [n, m] = arr;
let list = [];
for (let i = 1; i <= n; i++) list.push([i]);
while (m > 1) {
    let newList = [];
    for (let i in list) {
        let x = list[i][0];
        while (x > 0) {
            newList.push([x].concat(list[i]));
            x--;
        }
    }
    list = newList;
    m--;
}
let res = "";
list = list
    .sort((a, b) => {
        let i = 0;
        while (a[i] == b[i]) i++;
        return a[i] - b[i];
    })
    .map((x) => x.join(" "));
for (let i in list) {
    res += list[i] + "\n";
}
console.log(res.trim());
