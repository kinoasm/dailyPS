let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
const solution = (n) => {
    let list = Array.from({ length: n + 1 }, (_, i) => i);
    for (let i = 2; i * i <= n; i++) {
        if (list[i]) {
            for (let j = i * i; j <= n; j += i) {
                if (list[j]) list[j] = false;
            }
        }
    }
    list = list.filter((x) => x != false).slice(1);
    let sum = [0];
    let now = 0;
    for (let i in list) {
        now += list[i];
        sum.push(now);
    }
    let count = 0;
    for (let i = 0; i < sum.length; i++) {
        for (let j = i; j < sum.length; j++) {
            if (sum[j] - sum[i] === n) {
                count++;
                break;
            } else if (sum[j] - sum[i] > n) break;
        }
    }
    return count;
};
console.log(solution(n));
