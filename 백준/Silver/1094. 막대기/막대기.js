let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
const cnt = (x) => {
    let res = 0;
    while (x > 0) {
        if (x % 2 == 1) res++;
        x = Math.floor(x / 2);
    }
    return res;
};
console.log(cnt(n));
