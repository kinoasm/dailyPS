let n = require("fs").readFileSync("/dev/stdin").toString().trim();
const solution = (n) => {
    if (n == 0) return 1;
    if (n == 2) return 3;
    if (n % 2 == 1) return 0;
    let dp = [3, 11];
    while (dp.length * 2 < n) {
        let now = dp.reduce((a, b) => a + 2 * b, 0);
        now += dp.at(-1) + 2;
        dp.push(now);
    }
    return dp.at(-1);
};
console.log(solution(n));
