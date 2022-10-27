let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
const solution = (n) => {
    if (n % 10 !== 0) return -1;
    else {
        let a = Math.floor(n / 300);
        n -= a * 300;
        let b = Math.floor(n / 60);
        n -= b * 60;
        let c = Math.floor(n / 10);
        return a + " " + b + " " + c;
    }
};
console.log(solution(n));
