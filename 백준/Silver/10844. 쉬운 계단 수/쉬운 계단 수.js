let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
const solution = (n) => {
    let list = [Array(10).fill(1)];
    list[0][0] = 0;
    while (list.length < n) {
        let last = list[list.length - 1];
        let now = Array(10).fill(0);
        for (let i = 0; i < 10; i++) {
            if (i == 0) now[i] = last[1];
            else if (i == 9) now[i] = last[8];
            else now[i] = (last[i - 1] + last[i + 1]) % 1000000000;
        }
        list.push(now);
    }
    return list[list.length - 1].reduce((a, b) => (a + b) % 1000000000, 0);
};
console.log(solution(n));
