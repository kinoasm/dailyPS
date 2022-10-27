let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
// 0from ex 3/1 ex fr 3/2 fr to 2/3 to fr 2 /4 ex to 1/5 to ex 1
let list = [["1 2", "2 1", "1 3", "3 1", "2 3", "3 2"]];
for (let i = 1; i < n; i++) {
    let last = list[i - 1];
    list.push([
        last[2] + "\n1 2\n" + last[5],
        last[4] + "\n2 1\n" + last[3],
        last[0] + "\n1 3\n" + last[4],
        last[5] + "\n3 1\n" + last[1],
        last[1] + "\n2 3\n" + last[2],
        last[3] + "\n3 2\n" + last[0],
    ]);
}
console.log(Math.pow(2, n) - 1 + "\n" + list[n - 1][2]);
