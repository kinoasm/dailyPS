let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let list = `  *  \n * * \n*****`.split("\n");
while (list.length < n) {
    let little = list;
    let h = little.length;
    let l = little[0].length;
    let half = (l + 1) / 2;
    let res = [];
    for (let i = 0; i < 2 * h; i++) {
        if (i < h) res.push(" ".repeat(half) + little[i] + " ".repeat(half));
        else res.push(little[i - h] + " " + little[i - h]);
    }
    list = res;
}
console.log(list.join("\n"));
