let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const [n] = arr.slice(0, 1)[0].split(" ").map(Number);
const paper = arr.slice(1).map((x) => x.split(" ").map(Number));
let [m, z, p] = [0, 0, 0];
const check = (list) => {
    let origin = list[0][0];
    let k = list.length;
    let allSame = true;
    seq: for (let i in list)
        for (let j in list[i])
            if (list[i][j] !== origin) {
                allSame = false;
                check(list.slice(0, k / 3).map((x) => x.slice(0, k / 3)));
                check(
                    list.slice(0, k / 3).map((x) => x.slice(k / 3, (2 * k) / 3))
                );
                check(list.slice(0, k / 3).map((x) => x.slice((2 * k) / 3)));
                check(
                    list.slice(k / 3, (2 * k) / 3).map((x) => x.slice(0, k / 3))
                );
                check(
                    list
                        .slice(k / 3, (2 * k) / 3)
                        .map((x) => x.slice(k / 3, (2 * k) / 3))
                );
                check(
                    list
                        .slice(k / 3, (2 * k) / 3)
                        .map((x) => x.slice((2 * k) / 3))
                );
                check(list.slice((2 * k) / 3).map((x) => x.slice(0, k / 3)));
                check(
                    list
                        .slice((2 * k) / 3)
                        .map((x) => x.slice(k / 3, (2 * k) / 3))
                );
                check(list.slice((2 * k) / 3).map((x) => x.slice((2 * k) / 3)));
                break seq;
            }
    if (allSame) {
        if (origin == -1) m++;
        else if (origin == 0) z++;
        else p++;
    }
};
check(paper);
console.log(m + "\n" + z + "\n" + p);
