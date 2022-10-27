let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let list = [1];
for (let i = 2; i <= n; i++) {
    list.push(i * list[list.length - 1]);
}
console.log(list[list.length - 1]);
