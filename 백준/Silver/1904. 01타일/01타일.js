let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
const solution = (n) => {
    let list = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        list.push((list[i - 2] + list[i - 1]) % 15746);
    }
    return list[n];
};
console.log(solution(n));
