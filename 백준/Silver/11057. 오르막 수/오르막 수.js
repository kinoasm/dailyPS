let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
const solution = (n) => {
    let dp = [Array(10).fill(1)];
    for (let i = 1; i < n; i++) {
        let now = Array(10).fill(0);
        for (let j = 0; j <= 9; j++) {
            for (let k = j; k <= 9; k++) now[j] += dp[i - 1][k];
        }
        for (let j in now) now[j] %= 10007;
        dp.push(now);
    }
    let sum = dp[n - 1].reduce((a, b) => a + b, 0);
    return sum % 10007;
};
console.log(solution(n));
