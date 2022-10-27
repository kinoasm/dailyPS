let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
if (n === 1) console.log(1);
else if (n === 2) console.log(3);
else {
    let list = [0, 1, 3];
    for (let i = 3; i <= n; i++) {
        list.push((list[i - 1] + 2 * list[i - 2]) % 10007);
    }
    console.log(list[n]);
}
