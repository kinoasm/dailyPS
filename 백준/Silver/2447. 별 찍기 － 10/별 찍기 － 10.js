let arr = require("fs").readFileSync("/dev/stdin").toString().trim();
let n = Number(arr);
const k = (n) => {
    let i = 0;
    while (n % 3 == 0) {
        n /= 3;
        i++;
    }
    return i;
};
const star = (x) => {
    if (x == 0) return "*";
    else {
        let a = star(x - 1).split("\n");
        let x3 = Math.pow(3, x);
        let x2 = x3 / 3;
        let mat = [];
        for (let i = 0; i < x3; i++) {
            let row = "";
            for (let j = 0; j < x3; j++) {
                if (Math.floor(j / x2) == 1 && Math.floor(i / x2) == 1) {
                    row += " ";
                } else {
                    row += a[i % x2][j % x2];
                }
            }
            mat.push(row);
        }
        return mat.join("\n");
    }
};
console.log(star(k(n)));
