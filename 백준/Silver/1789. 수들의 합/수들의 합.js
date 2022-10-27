let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
const solution = (n) => {
    let i = 1;
    while ((i * i) / 2 + i / 2 <= n) i++;
    return i - 1;
};
console.log(solution(n));
