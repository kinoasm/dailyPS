let n = require("fs").readFileSync("/dev/stdin").toString().trim();
const solution = (n) => {
    let [a, b] = [0, 0];
    let now = n[0];
    now == "1" ? a++ : b++;
    for (let i of n) {
        if (i != now) {
            now = i;
            now == "1" ? a++ : b++;
        }
    }
    return Math.min(a, b);
};
console.log(solution(n));
