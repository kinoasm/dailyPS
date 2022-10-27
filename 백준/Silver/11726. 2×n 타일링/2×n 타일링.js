let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let list = [0, 1, 2];
for (let i = 3; i <= n; i++) {
    list.push((list[i - 1] + list[i - 2]) % 10007);
}
console.log(list[n]);
