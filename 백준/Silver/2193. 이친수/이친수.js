let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
const solution = (n) => {
    let list = [1, 1];
    let i = 2;
    while (i < n) {
        list.push(BigInt(list[i - 1]) + BigInt(list[i - 2]));
        i++;
    }
    return list[n - 1].toString();
};
console.log(solution(n));
